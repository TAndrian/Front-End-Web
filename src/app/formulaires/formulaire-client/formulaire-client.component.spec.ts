import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireClientComponent } from './formulaire-client.component';

describe('FormulaireClientComponent', () => {
  let component: FormulaireClientComponent;
  let fixture: ComponentFixture<FormulaireClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
