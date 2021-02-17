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
import {GestionUtilisateursModule} from './gestion-utilisateurs/gestion-utilisateurs.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        StudentModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        FormulairesModule,
        AffichageModule,
        GestionUtilisateursModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
