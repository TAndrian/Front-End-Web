import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationDialogueComponent } from './authentification-dialogue.component';

describe('AuthentificationDialogueComponent', () => {
  let component: AuthentificationDialogueComponent;
  let fixture: ComponentFixture<AuthentificationDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentificationDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
