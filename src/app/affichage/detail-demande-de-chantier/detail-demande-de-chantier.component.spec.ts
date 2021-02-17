import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDemandeDeChantierComponent } from './detail-demande-de-chantier.component';

describe('DetailDemandeDeChantierComponent', () => {
  let component: DetailDemandeDeChantierComponent;
  let fixture: ComponentFixture<DetailDemandeDeChantierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDemandeDeChantierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDemandeDeChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
