import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAdministrationComponent } from './formulaire-administration.component';

describe('FicheAdministrationComponent', () => {
  let component: FormulaireAdministrationComponent;
  let fixture: ComponentFixture<FormulaireAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
