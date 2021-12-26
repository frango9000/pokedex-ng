import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from 'apps/pokedex-ng/src/app/shared/shared.module';
import { PokemonTypeDamagesComponent } from './pokemon-type-damages.component';

@NgModule({
  declarations: [PokemonTypeDamagesComponent],
  imports: [CommonModule, TranslocoModule, MDBBootstrapModule.forRoot(), SharedModule],
  exports: [PokemonTypeDamagesComponent],
})
export class PokemonTypeDamagesModule {}
