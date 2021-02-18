import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailChantierComponent} from './detail-chantier/detail-chantier.component';
import {ListChantiersComponent} from './list-chantiers/list-chantiers.component';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import {DetailClientComponent} from './detail-client/detail-client.component';
import {ListClientsComponent} from './list-clients/list-clients.component';
import {DetailSiteComponent} from './detail-site/detail-site.component';
import {ListSitesComponent} from './list-sites/list-sites.component';
import {DetailDemandeDeChantierComponent} from './detail-demande-de-chantier/detail-demande-de-chantier.component';
import {ListDemandeDeChantierComponent} from './list-demande-de-chantier/list-demande-de-chantier.component';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        DetailChantierComponent,
        ListChantiersComponent,
        DetailClientComponent,
        ListClientsComponent,
        DetailSiteComponent,
        ListSitesComponent,
        DetailDemandeDeChantierComponent,
        ListDemandeDeChantierComponent
    ],
    imports: [
        CommonModule,
        SharedMaterialModule,
        AppRoutingModule,
        RouterModule
    ],
    exports: [
        DetailChantierComponent,
        ListChantiersComponent,
        DetailClientComponent,
        ListClientsComponent,
        DetailSiteComponent,
        ListSitesComponent,
        DetailDemandeDeChantierComponent,
        ListDemandeDeChantierComponent
    ]
})
export class AffichageModule {
}
