import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {PokeGenerationPipe} from './pipes/poke-generation.pipe';
import {PositionPipe} from './pipes/position.pipe';
import {ResourceIdPipe} from './pipes/resource-id.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PokeGenerationPipe,
    PositionPipe,
    ResourceIdPipe
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PokeGenerationPipe,
    PositionPipe,
    ResourceIdPipe
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class SharedModule {
}
