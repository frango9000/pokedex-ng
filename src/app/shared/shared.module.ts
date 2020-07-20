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
import {PokemonMovesComponent} from './components/pokemon-moves/pokemon-moves.component';
import {PokeVersionPipe} from './pipes/poke-version.pipe';
import {FirstPipe} from './pipes/first.pipe';
import {ReplacePipe} from './pipes/replace.pipe';


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
    PokemonMovesComponent,
    PokeVersionPipe,
    FirstPipe,
    ReplacePipe,
    PokeVersionPipe,
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
    ExpandableResourcesPipe,
    PokemonMovesComponent,
    PokeTranslatePipe,
    FirstPipe,
    PokeVersionPipe
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class SharedModule {
}
