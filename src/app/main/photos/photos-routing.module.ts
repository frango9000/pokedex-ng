import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosHomeComponent} from './photos-home/photos-home.component';
import {PhotosDetailComponent} from './photos-detail/photos-detail.component';


const routes: Routes = [
  {
    path: '',
    component: PhotosHomeComponent
  },
  {
    path: ':photo_id',
    component: PhotosDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PhotosRoutingModule {
}
