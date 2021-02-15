import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormulaireNouveauChantierComponent} from './formulaires/formulaire-nouveau-chantier/formulaire-nouveau-chantier.component';
import {FormulaireClientComponent} from './formulaires/formulaire-client/formulaire-client.component';
import {FormulaireSiteComponent} from './formulaires/formulaire-site/formulaire-site.component';
import {FormulaireDemandeChantierComponent} from './formulaires/formulaire-demande-chantier/formulaire-demande-chantier.component';

const routes: Routes = [
    {path: '', component: FormulaireDemandeChantierComponent},
    {path: 'demandeDeChantier', component: FormulaireDemandeChantierComponent},
    {path: 'nouveauChantier', component: FormulaireNouveauChantierComponent},
    {path: 'client', component: FormulaireClientComponent},
    {path: 'site', component: FormulaireSiteComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
