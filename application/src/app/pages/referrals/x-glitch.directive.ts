import {
  afterRender,
  Directive,
  ElementRef,
  Inject,
  Renderer2,
  signal,
  type OnDestroy,
  type WritableSignal
} from '@angular/core';
import { getWithAuditedCallTime } from '../../../utilities/get-with-audited-call-time.function';

const HOST_ELEMENT_MUTATION_AUDIT_TIME_MS: number = 300;

/**
 * @todo
 * Rework with `@angular/cdk/observers` as soon as
 * it's available with standalone components
 *
 * @todo
 * Think how to make Tailwind work with `data-XGlitchDirective-text-content-copy`
 * extracted into a constant.
 */
@Directive({
  selector: '[appXGlitch]',
  standalone: true
})
export class XGlitchDirective implements OnDestroy {
  private readonly mutationObserver$: WritableSignal<MutationObserver | null> = signal(null);

  private readonly onHostElementMutation: VoidFunction = getWithAuditedCallTime(() => {
    this.renderer.setAttribute(
      this.hostElement,
      XGlitchDirective.textContentCopyAttributeName,
      this.hostElement.textContent ?? ''
    );
  }, HOST_ELEMENT_MUTATION_AUDIT_TIME_MS);

  private static readonly textContentCopyAttributeName: string = 'data-XGlitchDirective-text-content-copy';

  private static readonly hostClassNames: string[] = [
    'relative',
    'animate-x-glitch',
    'before:[clip-path:polygon(0_0,100%_0,100%_33%,0_33%)]',
    'after:[clip-path:polygon(0_67%,100%_67%,100%_100%,0_100%)]',
    'before:animate-x-glitch-top',
    'after:animate-x-glitch-bottom'
  ].concat(
    [
      'left-0',
      'top-0',
      'absolute',
      `content-[attr(${XGlitchDirective.textContentCopyAttributeName})]`,
      'pointer-events-none',
      'select-none'
    ].flatMap((commonPseudoElementClassName: string) => [
      `before:${commonPseudoElementClassName}`,
      `after:${commonPseudoElementClassName}`
    ])
  );

  private get hostElement(): HTMLElement {
    const element: unknown = this.elementRef.nativeElement;
    if (!(element instanceof HTMLElement)) {
      throw new Error('Element is not HTMLElement');
    }

    return element;
  }

  constructor(
    @Inject(ElementRef) private readonly elementRef: ElementRef,
    @Inject(Renderer2) private readonly renderer: Renderer2
  ) {
    afterRender(() => {
      const mutationObserver: MutationObserver = new MutationObserver(this.onHostElementMutation);
      mutationObserver.observe(this.hostElement, {
        attributes: false,
        childList: true,
        subtree: false
      });
      this.mutationObserver$.set(mutationObserver);

      XGlitchDirective.hostClassNames.forEach((className: string) => {
        this.renderer.addClass(this.hostElement, className);
      });

      this.onHostElementMutation();
    });
  }

  public ngOnDestroy(): void {
    XGlitchDirective.hostClassNames.forEach((className: string) => {
      this.renderer.removeClass(this.hostElement, className);
    });

    this.renderer.removeAttribute(this.hostElement, XGlitchDirective.textContentCopyAttributeName);

    const mutationObserver: MutationObserver | null = this.mutationObserver$();
    if (mutationObserver === null) {
      return;
    }
    mutationObserver.disconnect();
  }
}
