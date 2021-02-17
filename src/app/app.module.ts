import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentModule} from './students/student.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {FormulairesModule} from './formulaires/formulaires.module';
import {AffichageModule} from './affichage/affichage.module';
import { ListClientsComponent } from './affichage/list-clients/list-clients.component';
import { DetailClientComponent } from './affichage/detail-client/detail-client.component';
import { ListSitesComponent } from './affichage/list-sites/list-sites.component';
import { DetailSiteComponent } from './affichage/detail-site/detail-site.component';
import { DetailDemandeDeChantierComponent } from './affichage/detail-demande-de-chantier/detail-demande-de-chantier.component';
import { ListDemandeDeChantierComponent } from './affichage/list-demande-de-chantier/list-demande-de-chantier.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StudentModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        FormulairesModule,
        AffichageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
