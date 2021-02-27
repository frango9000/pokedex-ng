import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TypeService } from './type.service';

describe('PokemonTypeService', () => {
  let service: TypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
    });
    service = TestBed.inject(TypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
