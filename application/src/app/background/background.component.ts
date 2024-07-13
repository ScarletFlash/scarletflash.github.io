import {
  afterRender,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  ViewChild,
  ViewEncapsulation,
  type ElementRef
} from '@angular/core';
import type { Dimensions } from '../declarations/dimensions.interface';
import { BackgroundService } from './background.service';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  templateUrl: './background.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [BackgroundService]
})
export class BackgroundComponent {
  @ViewChild('canvas_container', { static: true })
  public canvasContainerRef?: ElementRef<HTMLCanvasElement>;

  @ViewChild('canvas', { static: true })
  public canvasRef?: ElementRef<HTMLCanvasElement>;

  private get desiredCanvasDimensions(): Dimensions {
    if (this.canvasContainerRef === undefined) {
      throw new Error('Canvas container element not found');
    }

    return {
      widthPx: this.canvasContainerRef.nativeElement.clientWidth,
      heightPx: this.canvasContainerRef.nativeElement.clientHeight
    };
  }

  constructor(private readonly backgroundService: BackgroundService) {
    afterRender(() => {
      if (this.canvasRef === undefined) {
        throw new Error('<canvas> is not found');
      }

      this.backgroundService.attachCanvas(this.canvasRef.nativeElement);
    });
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.backgroundService.setContainerSize(this.desiredCanvasDimensions);
  }
}
