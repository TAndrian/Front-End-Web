import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperFicheInterventionComponent } from './stepper-fiche-intervention.component';

describe('StepperFicheInterventionComponent', () => {
  let component: StepperFicheInterventionComponent;
  let fixture: ComponentFixture<StepperFicheInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperFicheInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperFicheInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
