import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgVarDirective } from '../../../../shared/directives/ng-var.directive';
import { PokemonAbilitiesComponent } from './pokemon-abilities.component';
import { PokemonAbilityComponent } from './pokemon-ability/pokemon-ability.component';
import { stubAbilityServiceProvider } from '../../../../shared/services/pokemon/pokemon.service.stubs';

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
        declarations: [PokemonAbilitiesComponent, PokemonAbilityStubComponent, NgVarDirective],
        providers: [stubAbilityServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
