import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Species } from '@pokedex-ng/domain';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { gameVersionStubServiceProvider } from '../../../../../shared/services/game-version.service.stub';
import { PokemonSpeciesInfoComponent } from './pokemon-species-info.component';

describe('PokemonSpeciesInfoComponent', () => {
  let component: PokemonSpeciesInfoComponent;
  let fixture: ComponentFixture<PokemonSpeciesInfoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonSpeciesInfoComponent],
        providers: [gameVersionStubServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSpeciesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-pokemon-species-info', template: '' })
export class PokemonSpeciesInfoStubComponent implements Partial<PokemonSpeciesInfoComponent> {
  @Input() public pokemonSpecies: Species;
}
