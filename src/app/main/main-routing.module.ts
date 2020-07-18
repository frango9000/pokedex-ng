import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosModule} from './photos/photos.module';
import {MainComponent} from './main.component';

export const loadPhotosModule = () => PhotosModule;

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'photos',
        pathMatch: 'full'
      },
      {
        path: 'photos',
        loadChildren: loadPhotosModule
      }
    ]
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
export class MainRoutingModule {
}
