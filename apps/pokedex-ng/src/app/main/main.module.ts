import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {TestComponent} from './test/test.component';


@NgModule({
  declarations: [MainComponent, TestComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule {
}
