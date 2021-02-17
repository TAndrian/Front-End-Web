import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NouvelUtilisateurComponent} from './nouvel-utilisateur/nouvel-utilisateur.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [NouvelUtilisateurComponent],
    imports: [
        CommonModule,
        SharedMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        SharedModule,
    ],
    exports: [NouvelUtilisateurComponent]
})
export class GestionUtilisateursModule {
}
