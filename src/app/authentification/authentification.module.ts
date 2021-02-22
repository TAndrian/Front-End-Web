import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { AuthentificationService } from './services/authentification.service';
import { AlertService } from './services/alert.service';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormulairesModule } from '../formulaires/formulaires.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';



@NgModule({
  declarations: [ConnexionComponent],
  imports: [
    CommonModule,
    FormulairesModule
  ],
  exports: [ConnexionComponent],
  providers: [
    UserService,
    AuthentificationService,
    AlertService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class AuthentificationModule { }
