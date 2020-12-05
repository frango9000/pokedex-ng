import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgVarDirective } from './directives/ng-var.directive';
import { FooterComponent } from './footer/footer.component';
import { LocalePickerComponent } from './navbar/locale-picker/locale-picker.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExpandableResourcesPipe } from './pipes/expandable-resources.pipe';
import { PokeGenerationPipe } from './pipes/poke-generation.pipe';
import { PokeTypeColorPipe } from './pipes/poke-type-color.pipe';
import { PositionPipe } from './pipes/position.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { ResourceIdPipe } from './pipes/resource-id.pipe';
import { RomanPipe } from './pipes/roman.pipe';

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
  imports: [CommonModule, MDBBootstrapModule.forRoot(), RouterModule, TranslateModule],
})
export class SharedModule {}
