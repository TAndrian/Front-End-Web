import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientService} from './services/client.service';
import {DemandeDeChantierService} from './services/demande-de-chantier.service';
import {SiteService} from './services/site.service';
import {ChantierService} from './services/chantier.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        ClientService,
        DemandeDeChantierService,
        SiteService,
        ChantierService
    ]
})
export class CoreModule {
}
