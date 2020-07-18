import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhotosRoutingModule} from './photos-routing.module';
import {PhotosHomeComponent} from './photos-home/photos-home.component';
import {PhotosDetailComponent} from './photos-detail/photos-detail.component';


@NgModule({
  declarations: [PhotosHomeComponent, PhotosDetailComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule {
}
