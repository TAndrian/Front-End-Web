import {TestBed} from '@angular/core/testing';

import {AffichageUtilsService} from './affichage-utils.service';

describe('AffichageUtilsService', () => {
    let service: AffichageUtilsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AffichageUtilsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
