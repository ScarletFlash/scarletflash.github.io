import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
} from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-avatar",
  imports: [NgOptimizedImage],
  viewProviders: [
    {
      provide: IMAGE_LOADER,
      useValue: ({
        width,
        src,
        isPlaceholder: rawIsPlaceholder,
      }: ImageLoaderConfig) => {
        const [fileEntry, ...basePathParts]: string[] = src
          .split("/")
          .reverse();
        const basePath: string = basePathParts.reverse().join("/");
        const [fileExtension, ...fileNameParts]: string[] = fileEntry
          .split(".")
          .reverse();
        const fileName: string = fileNameParts.reverse().join(".");
        const isPlaceholder: boolean =
          Boolean(rawIsPlaceholder) || typeof width !== "number";
        const variableSuffix: string = Boolean(isPlaceholder)
          ? ".placeholder"
          : `-${width}w`;
        return `/${basePath}/${fileName}${variableSuffix}.${fileExtension}`.replaceAll(
          "//",
          "/",
        );
      },
    },
  ],
  templateUrl: "./avatar.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {}
