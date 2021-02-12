import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDemandeChantierComponent } from './formulaire-demande-chantier.component';

describe('FormulaireDemandeChantierComponent', () => {
  let component: FormulaireDemandeChantierComponent;
  let fixture: ComponentFixture<FormulaireDemandeChantierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireDemandeChantierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDemandeChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
