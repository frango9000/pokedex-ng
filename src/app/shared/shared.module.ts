import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {SplitIdPipe} from './pipes/split-id.pipe';
import {PokeGenerationPipe} from './pipes/poke-generation.pipe';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, SplitIdPipe, PokeGenerationPipe],
  exports: [
    NavbarComponent,
    FooterComponent,
    SplitIdPipe,
    PokeGenerationPipe
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class SharedModule {
}
