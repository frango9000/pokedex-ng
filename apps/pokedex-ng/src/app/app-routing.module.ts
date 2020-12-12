import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';

export const loadMainModule = () => MainModule;

const routes: Routes = [
  {
    path: '',
    loadChildren: loadMainModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
