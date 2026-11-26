import { IMAGE_LOADER, NgOptimizedImage, type ImageLoaderConfig } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [NgOptimizedImage],
  viewProviders: [
    {
      provide: IMAGE_LOADER,
      useValue: ({ width, src, isPlaceholder: rawIsPlaceholder }: ImageLoaderConfig) => {
        const [fileEntry, ...basePathParts]: string[] = src.split('/').reverse();
        const basePath = basePathParts.reverse().join('/');
        const [fileExtension, ...fileNameParts]: string[] = fileEntry.split('.').reverse();
        const fileName = fileNameParts.reverse().join('.');
        const isPlaceholder = Boolean(rawIsPlaceholder) || typeof width !== 'number';
        const variableSuffix = isPlaceholder ? '.placeholder' : `-${width}w`;
        return `/${basePath}/${fileName}${variableSuffix}.${fileExtension}`.replaceAll('//', '/');
      }
    }
  ],
  templateUrl: './avatar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AvatarComponent {}
