import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PokemonAbilities } from '../../../../shared/domain/pokemon';
import { ExpandableResourcesPipe } from '../../../../shared/pipes/expandable-resources.pipe';
import { PokemonAbilitiesComponent } from './pokemon-abilities.component';
import { PokemonAbilityComponent } from './pokemon-ability/pokemon-ability.component';

describe('PokemonAbilitiesComponent', () => {
  let component: PokemonAbilitiesComponent;
  let fixture: ComponentFixture<PokemonAbilitiesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonAbilitiesComponent, ExpandableResourcesPipe, PokemonAbilityComponent],
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
export class PokemonAbilitiesComponentStub implements Partial<PokemonAbilitiesComponent> {
  @Input() pokemonAbilities: PokemonAbilities[];
}
