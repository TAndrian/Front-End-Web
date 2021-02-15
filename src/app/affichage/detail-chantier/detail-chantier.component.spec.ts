import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailChantierComponent} from './detail-chantier.component';

describe('DetailChantierComponent', () => {
    let component: DetailChantierComponent;
    let fixture: ComponentFixture<DetailChantierComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DetailChantierComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailChantierComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
