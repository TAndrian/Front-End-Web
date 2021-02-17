import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormulaireNouveauChantierComponent} from './formulaires/formulaire-nouveau-chantier/formulaire-nouveau-chantier.component';
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

const routes: Routes = [
    {path: 'demandeDeChantier', component: FormulaireDemandeChantierComponent},
    {path: 'nouvelUtilisateur', component: NouvelUtilisateurComponent},
    {path: 'nouveauDemandeDeChantier', component: FormulaireDemandeChantierComponent},
    {path: 'nouveauChantier', component: FormulaireNouveauChantierComponent},
    {path: 'nouveauClient', component: FormulaireClientComponent},
    {path: 'nouveauSite', component: FormulaireSiteComponent},    {path: 'client', component: FormulaireClientComponent},
    {path: 'site', component: FormulaireSiteComponent},
    {path: 'detailChantier/:id', component: DetailChantierComponent},
    {path: 'detailClient/:id', component: DetailClientComponent},
    {path: 'detailSite/:id', component: DetailSiteComponent},
    {path: 'detailDemandeDeChantier/:id', component: DetailDemandeDeChantierComponent},
    {path: 'listeChantier', component: ListChantiersComponent},
    {path: 'listeClient', component: ListClientsComponent},
    {path: 'listeSite', component: ListSitesComponent},
    {path: 'listeDemandeDeChantier', component: ListDemandeDeChantierComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
