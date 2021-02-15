import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormulaireDemandeChantierComponent} from './formulaire-demande-chantier/formulaire-demande-chantier.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import {SharedModule} from '../shared/shared.module';
import {FormulaireNouveauChantierComponent} from './formulaire-nouveau-chantier/formulaire-nouveau-chantier.component';
import {NgxMatFileInputModule} from '@angular-material-components/file-input';
import {FormulaireSiteComponent} from './formulaire-site/formulaire-site.component';
import {FormulaireClientComponent} from './formulaire-client/formulaire-client.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
    declarations: [
        FormulaireDemandeChantierComponent,
        FormulaireNouveauChantierComponent,
        FormulaireSiteComponent,
        FormulaireClientComponent
    ],
    imports: [
        CommonModule,
        SharedMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        SharedModule,
        NgxMatFileInputModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        FormulaireDemandeChantierComponent,
        FormulaireNouveauChantierComponent,
        FormulaireSiteComponent,
        FormulaireClientComponent
    ]
})
export class FormulairesModule {
}
