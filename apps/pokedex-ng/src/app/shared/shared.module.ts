import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FilterBarComponent } from './components/filter/filter-bar.component';
import { GenerationFilterComponent } from './components/filters/generation-filter/generation-filter.component';
import { TypeFilterComponent } from './components/filters/type-filter/type-filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocalePickerComponent } from './components/navbar/locale-picker/locale-picker.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgVarDirective } from './directives/ng-var.directive';
import { ExpandableResourcesPipe } from './pipes/expandable-resources.pipe';
import { PokeTypeColorPipe } from './pipes/poke-type-color.pipe';
import { PositionPipe } from './pipes/position.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { ResourceIdPipe } from './pipes/resource-id.pipe';
import { RomanPipe } from './pipes/roman.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PositionPipe,
    ResourceIdPipe,
    PokeTypeColorPipe,
    NgVarDirective,
    ExpandableResourcesPipe,
    RomanPipe,
    ReplacePipe,
    LocalePickerComponent,
    FilterBarComponent,
    GenerationFilterComponent,
    TypeFilterComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PositionPipe,
    ResourceIdPipe,
    PokeTypeColorPipe,
    NgVarDirective,
    ExpandableResourcesPipe,
    RomanPipe,
    TranslateModule,
    ReplacePipe,
    FilterBarComponent,
    GenerationFilterComponent,
    TypeFilterComponent,
  ],
  imports: [CommonModule, MDBBootstrapModule.forRoot(), RouterModule, TranslateModule],
})
export class SharedModule {}
