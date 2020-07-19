import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {SplitIdPipe} from './pipes/split-id.pipe';
import {PokeGenerationPipe} from './pipes/poke-generation.pipe';
import {PositionPipe} from './pipes/position.pipe';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, SplitIdPipe, PokeGenerationPipe, PositionPipe],
  exports: [
    NavbarComponent,
    FooterComponent,
    SplitIdPipe,
    PokeGenerationPipe,
    PositionPipe
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class SharedModule {
}
