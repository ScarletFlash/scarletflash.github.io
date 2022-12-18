import { Application } from 'framework';
import { Scene } from 'scene';
import { EPage } from './pages/e.page';
import { ExperiencePage } from './pages/experience.page';
import { MainPage } from './pages/main.page';

const contentElement: HTMLElement | null = document.querySelector('main.content');
if (contentElement === null) {
  throw new Error('Content element is missing');
}
new Application({ contentElement, pages: [MainPage, ExperiencePage, EPage] }).start();

const canvasElement: HTMLCanvasElement | null = document.querySelector('canvas.background-animation');
if (canvasElement === null) {
  throw new Error('Canvas element is missing');
}
new Scene(canvasElement).run();
