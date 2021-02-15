import { TestBed } from '@angular/core/testing';

import { ChantierService } from './chantier.service';

describe('ChantierService', () => {
  let service: ChantierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChantierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
