import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperComponent } from './component/image-cropper.component';
import { LoadImageService } from './services/load-image.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImageCropperComponent
  ],
  exports: [
    ImageCropperComponent,
    LoadImageService,
  ]
})
export class ImageCropperModule {
}
