import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormulaireDemandeChantierComponent} from './formulaire-demande-chantier/formulaire-demande-chantier.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import {SharedModule} from '../shared/shared.module';
import { FormulaireNouveauChantierComponent } from './formulaire-nouveau-chantier/formulaire-nouveau-chantier.component';
import { FormulaireClientComponent } from './formulaire-client/formulaire-client.component';
import { FormulaireSiteComponent } from './formulaire-site/formulaire-site.component';


@NgModule({
  declarations: [
      FormulaireDemandeChantierComponent,
      FormulaireNouveauChantierComponent,
      FormulaireClientComponent,
      FormulaireSiteComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    SharedModule
  ],
  exports: [
      FormulaireDemandeChantierComponent,
      FormulaireNouveauChantierComponent,
      FormulaireClientComponent,
      FormulaireSiteComponent
  ]
})
export class FormulairesModule { }
