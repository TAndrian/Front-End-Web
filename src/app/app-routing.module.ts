import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormulaireNouveauChantierComponent} from './formulaires/formulaire-nouveau-chantier/formulaire-nouveau-chantier.component';
import {FormulaireClientComponent} from './formulaires/formulaire-client/formulaire-client.component';
import {FormulaireSiteComponent} from './formulaires/formulaire-site/formulaire-site.component';
import {FormulaireDemandeChantierComponent} from './formulaires/formulaire-demande-chantier/formulaire-demande-chantier.component';
import {DetailChantierComponent} from './affichage/detail-chantier/detail-chantier.component';
import {ListChantiersComponent} from './affichage/list-chantiers/list-chantiers.component';

const routes: Routes = [
    {path: '', component: ListChantiersComponent},
    {path: 'nouveau-demande-de-chantier', component: FormulaireDemandeChantierComponent},
    {path: 'nouveau-chantier', component: FormulaireNouveauChantierComponent},
    {path: 'nouveau-client', component: FormulaireClientComponent},
    {path: 'nouveau-site', component: FormulaireSiteComponent},

    {path: 'liste-chantiers', component: ListChantiersComponent},
    {path: 'details-chantier/:id', component: DetailChantierComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
