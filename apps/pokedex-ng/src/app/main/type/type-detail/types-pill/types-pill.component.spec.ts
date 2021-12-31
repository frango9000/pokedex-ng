import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TypePillComponent } from '../type-pill/type-pill.component';
import { TypesPillComponent } from './types-pill.component';

@Component({ selector: 'pokedex-ng-type-pill', template: '' })
export class StubTypePillComponent implements Partial<TypePillComponent> {
  @Input() public type: string;
  @Input() public size = 16;
  @Input() public vertical = false;
  @Input() public inline = true;
  @Input() public clickable = true;
  @Input() public showDefending = true;
  @Input() public showAttacking = true;
}

describe('TypesPillComponent', () => {
  let component: TypesPillComponent;
  let fixture: ComponentFixture<TypesPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypesPillComponent, StubTypePillComponent],
      imports: [MDBBootstrapModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
