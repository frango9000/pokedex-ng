import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PokeGenerationPipe } from './pipes/poke-generation.pipe';
import { PositionPipe } from './pipes/position.pipe';
import { ResourceIdPipe } from './pipes/resource-id.pipe';
import { PokeTypeColorPipe } from './pipes/poke-type-color.pipe';
import { NgVarDirective } from './directives/ng-var.directive';
import { ExpandableResourcesPipe } from './pipes/expandable-resources.pipe';
import { RomanPipe } from './pipes/roman.pipe';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReplacePipe } from './pipes/replace.pipe';
import { LocalePickerComponent } from './navbar/locale-picker/locale-picker.component';

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
    RomanPipe,
    ReplacePipe,
    LocalePickerComponent,
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
    RomanPipe,
    TranslateModule,
    ReplacePipe,
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    TranslateModule,
  ],
})
export class SharedModule {}
