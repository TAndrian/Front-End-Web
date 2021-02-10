import { TestBed } from '@angular/core/testing';

import { DemandeDeChantierService } from './demande-de-chantier.service';

describe('DemandeDeChantierService', () => {
  let service: DemandeDeChantierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeDeChantierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
