import { Service, computed, inject, signal, type Signal, type WritableSignal } from '@angular/core';
import { Router, type ViewTransitionInfo } from '@angular/router';
import {
  animate,
  cubicBezierAsString,
  millisecondsToSeconds,
  type AnimationPlaybackControlsWithThen,
  type BezierDefinition
} from 'motion';
import { type PageNavigationInformation } from '../../declarations/interfaces/page-navigation-information.interface';
import { getClampedValue } from '../../utilities/get-clamped-value.utility';
import { getPageNavigationInformation } from '../../utilities/get-page-navigation-information.utility';
import { getPageSlideDistance } from '../../utilities/get-page-slide-distance.utility';
import { getReducedMotionMediaQueryList } from '../../utilities/get-reduced-motion-media-query-list.utility';

const DEFAULT_SLIDE_DURATION_MILLISECONDS = 450;
const MINIMUM_SLIDE_DURATION_MILLISECONDS = 250;
const MAXIMUM_SLIDE_DURATION_MILLISECONDS = 600;
const SLIDE_EASING: BezierDefinition = [0.33, 1, 0.68, 1];
const [SLIDE_EASING_FIRST_CONTROL_POINT_X, SLIDE_EASING_FIRST_CONTROL_POINT_Y]: BezierDefinition = SLIDE_EASING;
const SLIDE_EASING_INITIAL_SLOPE = SLIDE_EASING_FIRST_CONTROL_POINT_Y / SLIDE_EASING_FIRST_CONTROL_POINT_X;
const NO_VELOCITY = 0;
const NO_GRID_SLIDE_OFFSET = 0;
const NO_SLIDE_SHIFT = 0;
const NO_VIEW_TRANSITION_NAME = 'none';
const RUNNING_PLAY_STATE: AnimationPlayState = 'running';
const PAGE_CONTENT_VIEW_TRANSITION_NAME = 'home-page';
const PAGE_CONTENT_GROUP = `::view-transition-group(${PAGE_CONTENT_VIEW_TRANSITION_NAME})`;
const OLD_PAGE_CONTENT_IMAGE = `::view-transition-old(${PAGE_CONTENT_VIEW_TRANSITION_NAME})`;
const NEW_PAGE_CONTENT_IMAGE = `::view-transition-new(${PAGE_CONTENT_VIEW_TRANSITION_NAME})`;
const OLD_ROOT_IMAGE = '::view-transition-old(root)';
const NEW_ROOT_IMAGE = '::view-transition-new(root)';
const HOLDING_FILL_MODE: FillMode = 'both';
const HIDDEN_OPACITY = 0;
const VISIBLE_OPACITY = 1;
const NO_TRANSLATE = 'none';
const NO_TRANSLATE_AXES: readonly string[] = ['0px', '0px', '0px'];
const TRANSLATE_AXIS_PATTERN = /(?:[^\s()]+|\((?:[^()]|\([^()]*\))*\))+/g;
const TRANSLATE_AXIS_SEPARATOR = ' ';

interface CapturedAnimation {
  readonly animation: Animation;
  readonly effect: KeyframeEffect;
  readonly targetStyle: CSSStyleDeclaration;
  readonly currentTime: number;
}

interface ContinuedAnimation {
  readonly oldImage: string;
  readonly keyframes: Keyframe[];
  readonly timing: EffectTiming;
  readonly currentTime: number;
}

@Service()
export class PageSlideService {
  private readonly router: Router = inject(Router);

  private readonly runningTransition: WritableSignal<ViewTransition | null> = signal(null);

  public readonly isSliding: Signal<boolean> = computed(() => this.runningTransition() !== null);

  private readonly writableGridSlideOffset: WritableSignal<number> = signal(NO_GRID_SLIDE_OFFSET);

  public readonly gridSlideOffset = this.writableGridSlideOffset.asReadonly();

  public slide({ transition }: ViewTransitionInfo): void {
    const navigationInformation = getPageNavigationInformation(this.router.currentNavigation()?.extras.info);
    if (navigationInformation === null || getReducedMotionMediaQueryList().matches) {
      transition.skipTransition();
      return;
    }

    const captureTimeStamp = performance.now();
    const capturedScrollPosition = window.scrollY;
    const capturedAnimations: readonly CapturedAnimation[] = document
      .getAnimations()
      .flatMap((animation: Animation): readonly CapturedAnimation[] => {
        const effect = animation.effect;
        if (
          !(effect instanceof KeyframeEffect) ||
          effect.target === null ||
          effect.pseudoElement !== null ||
          animation.playState !== RUNNING_PLAY_STATE ||
          typeof animation.currentTime !== 'number'
        ) {
          return [];
        }

        const targetStyle = getComputedStyle(effect.target);
        if (targetStyle.viewTransitionName === NO_VIEW_TRANSITION_NAME) {
          return [];
        }

        return [{ animation, effect, targetStyle, currentTime: animation.currentTime }];
      });
    capturedAnimations.forEach(({ animation }: CapturedAnimation) => {
      animation.pause();
    });
    const continuedAnimations: readonly ContinuedAnimation[] = capturedAnimations.map(
      ({ effect, targetStyle, currentTime }: CapturedAnimation): ContinuedAnimation => {
        const capturedTranslateAxes = PageSlideService.getTranslateAxes(targetStyle.translate);

        return {
          oldImage: `::view-transition-old(${targetStyle.viewTransitionName})`,
          keyframes: effect.getKeyframes().map((keyframe: ComputedKeyframe): Keyframe => {
            if (typeof keyframe['translate'] !== 'string') {
              return keyframe;
            }

            return {
              ...keyframe,
              translate: PageSlideService.getTranslateAxes(keyframe['translate'])
                .map((axis: string, index: number) => `calc(${axis} - ${capturedTranslateAxes[index]})`)
                .join(TRANSLATE_AXIS_SEPARATOR)
            };
          }),
          timing: effect.getTiming(),
          currentTime
        };
      }
    );
    const slideDistance = getPageSlideDistance(navigationInformation.direction);
    const velocityPixelsPerMillisecond = navigationInformation.velocityPixelsPerMillisecond ?? NO_VELOCITY;
    const slideDurationMilliseconds =
      velocityPixelsPerMillisecond > NO_VELOCITY
        ? getClampedValue({
            value: (SLIDE_EASING_INITIAL_SLOPE * Math.abs(slideDistance)) / velocityPixelsPerMillisecond,
            minimum: MINIMUM_SLIDE_DURATION_MILLISECONDS,
            maximum: MAXIMUM_SLIDE_DURATION_MILLISECONDS
          })
        : DEFAULT_SLIDE_DURATION_MILLISECONDS;
    const slideTiming: KeyframeAnimationOptions = {
      duration: slideDurationMilliseconds,
      easing: cubicBezierAsString(SLIDE_EASING),
      fill: HOLDING_FILL_MODE
    };

    this.runningTransition.set(transition);
    transition.finished.then(
      () => {
        this.finishSliding();
      },
      () => {
        this.finishSliding();
      }
    );
    transition.ready.then(
      () => {
        const documentElement = document.documentElement;
        const scrollShiftSinceCapture = window.scrollY - capturedScrollPosition;

        document
          .getAnimations()
          .filter(
            (animation: Animation) =>
              animation.effect instanceof KeyframeEffect && animation.effect.pseudoElement === PAGE_CONTENT_GROUP
          )
          .forEach((animation: Animation) => {
            animation.cancel();
          });

        const slideAnimations: readonly Animation[] = [
          documentElement.animate(
            {
              transform: [
                `translateY(${scrollShiftSinceCapture}px)`,
                `translateY(${scrollShiftSinceCapture - slideDistance}px)`
              ],
              opacity: [VISIBLE_OPACITY, VISIBLE_OPACITY]
            },
            { ...slideTiming, pseudoElement: OLD_PAGE_CONTENT_IMAGE }
          ),
          documentElement.animate(
            {
              transform: [`translateY(${slideDistance}px)`, `translateY(${NO_SLIDE_SHIFT}px)`],
              opacity: [VISIBLE_OPACITY, VISIBLE_OPACITY]
            },
            { ...slideTiming, pseudoElement: NEW_PAGE_CONTENT_IMAGE }
          ),
          documentElement.animate(
            { opacity: [HIDDEN_OPACITY, HIDDEN_OPACITY] },
            { ...slideTiming, pseudoElement: OLD_ROOT_IMAGE }
          ),
          documentElement.animate(
            { opacity: [VISIBLE_OPACITY, VISIBLE_OPACITY] },
            { ...slideTiming, pseudoElement: NEW_ROOT_IMAGE }
          )
        ]
          .concat(
            continuedAnimations.map(({ oldImage, keyframes, timing, currentTime }: ContinuedAnimation): Animation => {
              const continuedAnimation = documentElement.animate(keyframes, {
                ...timing,
                fill: HOLDING_FILL_MODE,
                pseudoElement: oldImage
              });
              continuedAnimation.currentTime = currentTime + performance.now() - captureTimeStamp;

              return continuedAnimation;
            })
          )
          .concat(
            Array.from(
              new Set<string>(
                continuedAnimations.map((continuedAnimation: ContinuedAnimation) => continuedAnimation.oldImage)
              ),
              (oldImage: string) =>
                documentElement.animate(
                  { opacity: [VISIBLE_OPACITY, VISIBLE_OPACITY] },
                  { ...slideTiming, pseudoElement: oldImage }
                )
            )
          );
        this.writableGridSlideOffset.set(slideDistance);
        const gridSlideAnimation: AnimationPlaybackControlsWithThen = animate(slideDistance, NO_GRID_SLIDE_OFFSET, {
          duration: millisecondsToSeconds(slideDurationMilliseconds),
          ease: SLIDE_EASING,
          onUpdate: (gridSlideOffset: number) => {
            this.writableGridSlideOffset.set(gridSlideOffset);
          }
        });

        transition.finished.then(() => {
          slideAnimations.forEach((slideAnimation: Animation) => {
            slideAnimation.cancel();
          });
          gridSlideAnimation.complete();
        });
      },
      () => {
        this.finishSliding();
      }
    );
  }

  private finishSliding(): void {
    this.writableGridSlideOffset.set(NO_GRID_SLIDE_OFFSET);
    this.runningTransition.set(null);
  }

  private static getTranslateAxes(translate: string): readonly string[] {
    if (translate === NO_TRANSLATE) {
      return NO_TRANSLATE_AXES;
    }

    const translateAxes: readonly string[] = translate.match(TRANSLATE_AXIS_PATTERN) ?? [];
    if (translateAxes.length === 0 || translateAxes.length > NO_TRANSLATE_AXES.length) {
      throw new Error(`Expected a translate of one to three axes, but got [${translate}]`);
    }

    return translateAxes.concat(NO_TRANSLATE_AXES.slice(translateAxes.length));
  }
}
