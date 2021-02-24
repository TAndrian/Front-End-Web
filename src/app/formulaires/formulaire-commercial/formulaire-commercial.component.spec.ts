import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCommercialComponent } from './fiche-commercial.component';

describe('FicheCommercialComponent', () => {
  let component: FormulaireCommercialComponent;
  let fixture: ComponentFixture<FormulaireCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
