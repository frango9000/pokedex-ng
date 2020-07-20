import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {PokeGenerationPipe} from './pipes/poke-generation.pipe';
import {PositionPipe} from './pipes/position.pipe';
import {ResourceIdPipe} from './pipes/resource-id.pipe';
import {PokeTypeColorPipe} from './pipes/poke-type-color.pipe';
import {PokemonAbilityComponent} from './components/pokemon-ability/pokemon-ability.component';
import {NgVarDirective} from './directives/ng-var.directive';
import {ExpandableResourcesPipe} from './pipes/expandable-resources.pipe';
import {PokeTranslatePipe} from './pipes/poke-translate.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PokeGenerationPipe,
    PositionPipe,
    ResourceIdPipe,
    PokeTypeColorPipe,
    PokemonAbilityComponent,
    NgVarDirective,
    ExpandableResourcesPipe,
    PokeTranslatePipe,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PokeGenerationPipe,
    PositionPipe,
    ResourceIdPipe,
    PokeTypeColorPipe,
    PokemonAbilityComponent,
    NgVarDirective,
    ExpandableResourcesPipe
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class SharedModule {
}
