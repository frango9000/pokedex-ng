import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StubExpandableResourcesPipe } from '../../../../shared/pipes/stubs';
import { PokemonAbilitiesComponent } from './pokemon-abilities.component';
import { PokemonAbilityComponent } from './pokemon-ability/pokemon-ability.component';

@Component({ selector: 'app-pokemon-ability', template: '' })
export class PokemonAbilityStubComponent implements Partial<PokemonAbilityComponent> {
  @Input() abilityId: string | number;
}

describe('PokemonAbilitiesComponent', () => {
  let component: PokemonAbilitiesComponent;
  let fixture: ComponentFixture<PokemonAbilitiesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonAbilitiesComponent, StubExpandableResourcesPipe, PokemonAbilityStubComponent],
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
