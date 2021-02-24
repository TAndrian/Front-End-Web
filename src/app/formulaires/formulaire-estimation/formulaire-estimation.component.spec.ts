import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormulaireEstimationComponent} from './formulaire-estimation.component';

describe('FormulaireNouveauChantierComponent', () => {
    let component: FormulaireEstimationComponent;
    let fixture: ComponentFixture<FormulaireEstimationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormulaireEstimationComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormulaireEstimationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
