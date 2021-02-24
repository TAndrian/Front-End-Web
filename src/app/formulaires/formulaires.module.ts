import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormulaireDemandeChantierComponent} from './formulaire-demande-chantier/formulaire-demande-chantier.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import {SharedModule} from '../shared/shared.module';
import {FormulaireEstimationComponent} from './formulaire-estimation/formulaire-estimation.component';
import {NgxMatFileInputModule} from '@angular-material-components/file-input';
import {FormulaireSiteComponent} from './formulaire-site/formulaire-site.component';
import {FormulaireClientComponent} from './formulaire-client/formulaire-client.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';
import {MatStepperModule} from '@angular/material/stepper';
import {AffichageModule} from '../affichage/affichage.module';
import {FormulaireCommercialComponent} from './formulaire-commercial/formulaire-commercial.component';
import {FormulaireAdministrationComponent} from './formulaire-administration/formulaire-administration.component';


@NgModule({
    declarations: [
        FormulaireDemandeChantierComponent,
        FormulaireEstimationComponent,
        FormulaireSiteComponent,
        FormulaireClientComponent,
        FormulaireCommercialComponent,
        FormulaireAdministrationComponent
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
        MatNativeDateModule,
        MatCheckboxModule,
        RouterModule,
        AppRoutingModule,
        MatStepperModule,
    ],
    exports: [
        FormulaireDemandeChantierComponent,
        FormulaireEstimationComponent,
        FormulaireSiteComponent,
        FormulaireClientComponent,
        FormulaireAdministrationComponent,
        FormulaireCommercialComponent
    ]
})
export class FormulairesModule {
}
