import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormulaireClientComponent} from './formulaires/formulaire-client/formulaire-client.component';
import {FormulaireSiteComponent} from './formulaires/formulaire-site/formulaire-site.component';
import {FormulaireDemandeChantierComponent} from './formulaires/formulaire-demande-chantier/formulaire-demande-chantier.component';
import {DetailChantierComponent} from './affichage/detail-chantier/detail-chantier.component';
import {ListChantiersComponent} from './affichage/list-chantiers/list-chantiers.component';
import {DetailDemandeDeChantierComponent} from './affichage/detail-demande-de-chantier/detail-demande-de-chantier.component';
import {DetailClientComponent} from './affichage/detail-client/detail-client.component';
import {DetailSiteComponent} from './affichage/detail-site/detail-site.component';
import {ListClientsComponent} from './affichage/list-clients/list-clients.component';
import {ListSitesComponent} from './affichage/list-sites/list-sites.component';
import {ListDemandeDeChantierComponent} from './affichage/list-demande-de-chantier/list-demande-de-chantier.component';
import {NouvelUtilisateurComponent} from './gestion-utilisateurs/nouvel-utilisateur/nouvel-utilisateur.component';
import { ConnexionComponent } from './authentification/components/connexion/connexion.component';
import { AuthGuard } from './authentification/helpers/auth.guard';
import { HomeComponent } from './shared/home/home.component';
import {StepperFicheInterventionComponent} from './affichage/stepper-fiche-intervention/stepper-fiche-intervention.component';


const routes: Routes = [
    {path: 'demande-de-cantier', component: FormulaireDemandeChantierComponent, canActivate: [AuthGuard]},
    {path: 'nouvel-utilisateur', component: NouvelUtilisateurComponent, canActivate: [AuthGuard]},
    {path: 'nouvelle-demande-de-chantier', component: FormulaireDemandeChantierComponent, canActivate: [AuthGuard]},
    {path: 'nouveau-client', component: FormulaireClientComponent, canActivate: [AuthGuard]},
    { path: 'nouveau-site', component: FormulaireSiteComponent, canActivate: [AuthGuard] },
    { path: 'client', component: FormulaireClientComponent, canActivate: [AuthGuard]},
    {path: 'site', component: FormulaireSiteComponent, canActivate: [AuthGuard]},
    {path: 'detail-chantier/:id', component: DetailChantierComponent, canActivate: [AuthGuard]},
    {path: 'detail-client/:id', component: DetailClientComponent, canActivate: [AuthGuard]},
    {path: 'detail-site/:id', component: DetailSiteComponent, canActivate: [AuthGuard]},
    {path: 'detail-demande-de-chantier/:id', component: DetailDemandeDeChantierComponent, canActivate: [AuthGuard]},
    {path: 'liste-chantier', component: ListChantiersComponent, canActivate: [AuthGuard]},
    {path: 'liste-client', component: ListClientsComponent, canActivate: [AuthGuard]},
    {path: 'liste-site', component: ListSitesComponent, canActivate: [AuthGuard]},
    {path: 'liste-demande-de-chantier', component: ListDemandeDeChantierComponent, canActivate: [AuthGuard]},
    {path: 'connexion', component: ConnexionComponent},
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'fiche-intervention/:id', component: StepperFicheInterventionComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
