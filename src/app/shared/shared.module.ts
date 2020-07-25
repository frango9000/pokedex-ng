import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {PokeGenerationPipe} from './pipes/poke-generation.pipe';
import {PositionPipe} from './pipes/position.pipe';
import {ResourceIdPipe} from './pipes/resource-id.pipe';
import {PokeTypeColorPipe} from './pipes/poke-type-color.pipe';
import {NgVarDirective} from './directives/ng-var.directive';
import {ExpandableResourcesPipe} from './pipes/expandable-resources.pipe';
import {PokeTranslatePipe} from './pipes/poke-translate.pipe';
import {PokeVersionListPipe} from './pipes/poke-version-list.pipe';
import {FirstPipe} from './pipes/first.pipe';
import {ReplacePipe} from './pipes/replace.pipe';
import {RomanPipe} from './pipes/roman.pipe';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {PokeVersionPipe} from './pipes/poke-version.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PokeGenerationPipe,
    PositionPipe,
    ResourceIdPipe,
    PokeTypeColorPipe,
    NgVarDirective,
    ExpandableResourcesPipe,
    PokeTranslatePipe,
    PokeVersionListPipe,
    FirstPipe,
    ReplacePipe,
    PokeVersionListPipe,
    RomanPipe,
    PokeVersionPipe,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PokeGenerationPipe,
    PositionPipe,
    ResourceIdPipe,
    PokeTypeColorPipe,
    NgVarDirective,
    ExpandableResourcesPipe,
    PokeTranslatePipe,
    FirstPipe,
    PokeVersionListPipe,
    ReplacePipe,
    RomanPipe,
    TranslateModule,
    PokeVersionPipe
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule
  ]
})
export class SharedModule {
}
