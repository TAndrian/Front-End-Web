import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientService} from './services/client.service';
import {DemandeDeChantierService} from './services/demande-de-chantier.service';
import {SiteService} from './services/site.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        ClientService,
        DemandeDeChantierService,
        SiteService
    ]
})
export class CoreModule {
}
