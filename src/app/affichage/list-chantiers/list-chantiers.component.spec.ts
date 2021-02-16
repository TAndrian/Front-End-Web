import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListChantiersComponent} from './list-chantiers.component';

describe('ListChantiersComponent', () => {
    let component: ListChantiersComponent;
    let fixture: ComponentFixture<ListChantiersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListChantiersComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListChantiersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
