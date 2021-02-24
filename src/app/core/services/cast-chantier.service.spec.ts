import { TestBed } from '@angular/core/testing';

import { CastChantierService } from './cast-chantier.service';

describe('CastChantierService', () => {
  let service: CastChantierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastChantierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
