import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PokemonStatsComponent } from './pokemon-stats.component';

describe('PokemonStatsComponent', () => {
  let component: PokemonStatsComponent;
  let fixture: ComponentFixture<PokemonStatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), MDBBootstrapModule.forRoot()],
      declarations: [PokemonStatsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
