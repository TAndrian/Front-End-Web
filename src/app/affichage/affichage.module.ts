import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailChantierComponent} from './detail-chantier/detail-chantier.component';
import {ListChantiersComponent} from './list-chantiers/list-chantiers.component';
import {SharedMaterialModule} from '../shared-material/shared-material.module';


@NgModule({
    declarations: [DetailChantierComponent, ListChantiersComponent],
    imports: [
        CommonModule,
        SharedMaterialModule
    ],
    exports: [
        DetailChantierComponent,
        ListChantiersComponent
    ]
})
export class AffichageModule {
}
