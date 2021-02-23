import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormulaireNouveauChantierComponent} from './formulaires/formulaire-fiche-intervention/formulaire-nouveau-chantier.component';
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
import {StepperFicheInterventionComponent} from './affichage/stepper-fiche-intervention/stepper-fiche-intervention.component';

const routes: Routes = [
    {path: 'demande-de-chantier', component: FormulaireDemandeChantierComponent},
    {path: 'nouvel-utilisateur', component: NouvelUtilisateurComponent},
    {path: 'nouvelle-demande-de-chantier', component: FormulaireDemandeChantierComponent},
    {path: 'fiche-intervention/:id', component: StepperFicheInterventionComponent},
    {path: 'nouveau-client', component: FormulaireClientComponent},
    {path: 'nouveau-site', component: FormulaireSiteComponent}, {path: 'client', component: FormulaireClientComponent},
    {path: 'site', component: FormulaireSiteComponent},
    {path: 'detail-chantier/:id', component: DetailChantierComponent},
    {path: 'detail-client/:id', component: DetailClientComponent},
    {path: 'detail-site/:id', component: DetailSiteComponent},
    {path: 'detail-demande-de-chantier/:id', component: DetailDemandeDeChantierComponent},
    {path: 'liste-chantier', component: ListChantiersComponent},
    {path: 'liste-client', component: ListClientsComponent},
    {path: 'liste-site', component: ListSitesComponent},
    {path: 'liste-demande-de-chantier', component: ListDemandeDeChantierComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
