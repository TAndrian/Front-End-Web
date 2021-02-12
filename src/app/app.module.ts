import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentModule} from './students/student.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormulaireDemandeChantierComponent } from './formulaires/formulaire-demande-chantier/formulaire-demande-chantier.component';
import {SharedModule} from './shared/shared.module';
import {FormulairesModule} from './formulaires/formulaires.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormulairesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
