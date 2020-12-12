import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PokemonAbilities } from '../../../../shared/domain/pokemon';
import { ExpandableResourcesStubPipe } from '../../../../shared/pipes/expandable-resources.pipe.spec';
import { PokemonAbilitiesComponent } from './pokemon-abilities.component';
import { PokemonAbilityStubComponent } from './pokemon-ability/pokemon-ability.component.spec';

describe('PokemonAbilitiesComponent', () => {
  let component: PokemonAbilitiesComponent;
  let fixture: ComponentFixture<PokemonAbilitiesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonAbilitiesComponent, ExpandableResourcesStubPipe, PokemonAbilityStubComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAbilitiesComponent);
    component = fixture.componentInstance;
    component.pokemonAbilities = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-pokemon-abilities', template: '' })
export class PokemonAbilitiesStubComponent implements Partial<PokemonAbilitiesComponent> {
  @Input() pokemonAbilities: PokemonAbilities[] = [];
}
