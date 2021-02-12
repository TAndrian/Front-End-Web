import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireSiteComponent } from './formulaire-site.component';

describe('FormulaireSiteComponent', () => {
  let component: FormulaireSiteComponent;
  let fixture: ComponentFixture<FormulaireSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
