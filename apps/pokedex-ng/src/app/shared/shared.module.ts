import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FilterToolbarComponent } from './components/filter-toolbar/filter-toolbar.component';
import { ClearFilterComponent } from './components/filters/clear-filter/clear-filter.component';
import { GenerationFilterComponent } from './components/filters/generation-filter/generation-filter.component';
import { QueryFilterComponent } from './components/filters/query-filter/query-filter.component';
import { TypesFilterComponent } from './components/filters/types-filter/types-filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterToggleComponent } from './components/navbar/filter-toggle/filter-toggle.component';
import { GridToggleComponent } from './components/navbar/grid-toggle/grid-toggle.component';
import { LocalePickerComponent } from './components/navbar/locale-picker/locale-picker.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VersionGroupPickerComponent } from './components/navbar/version-group-picker/version-group-picker.component';
import { NgVarDirective } from './directives/ng-var.directive';
import { ExpandableResourcesPipe } from './pipes/expandable-resources.pipe';
import { PokeTypeColorPipe } from './pipes/poke-type-color.pipe';
import { PositionPipe } from './pipes/position.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { ResourceIdPipe } from './pipes/resource-id.pipe';
import { RomanPipe } from './pipes/roman.pipe';
import { WithVersionGroupPipe } from './pipes/with-version-group.pipe';

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
    GenerationFilterComponent,
    TypesFilterComponent,
    WithVersionGroupPipe,
    VersionGroupPickerComponent,
    ClearFilterComponent,
    QueryFilterComponent,
    GridToggleComponent,
    FilterToggleComponent,
    FilterToolbarComponent,
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
    GenerationFilterComponent,
    TypesFilterComponent,
    WithVersionGroupPipe,
    ClearFilterComponent,
    FilterToolbarComponent,
  ],
  imports: [CommonModule, MDBBootstrapModule.forRoot(), RouterModule, TranslateModule],
})
export class SharedModule {}
