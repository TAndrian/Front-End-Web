import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListDemandeDeChantierComponent} from './list-demande-de-chantier.component';

describe('ListDemandeDeChantierComponent', () => {
    let component: ListDemandeDeChantierComponent;
    let fixture: ComponentFixture<ListDemandeDeChantierComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListDemandeDeChantierComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListDemandeDeChantierComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
