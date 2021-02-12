import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireNouveauChantierComponent } from './formulaire-nouveau-chantier.component';

describe('FormulaireNouveauChantierComponent', () => {
  let component: FormulaireNouveauChantierComponent;
  let fixture: ComponentFixture<FormulaireNouveauChantierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireNouveauChantierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireNouveauChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
