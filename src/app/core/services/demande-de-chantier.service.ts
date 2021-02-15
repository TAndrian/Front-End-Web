import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {DemandeDeChantier} from '../../shared/model/demandeDeChantier';
import {DemandeDeChantierGet} from '../../shared/model/demandeDeChantierGet';
@Injectable({
  providedIn: 'root'
})
export class DemandeDeChantierService {


  constructor(private http: HttpClient) {
    
  }
  options: any = {
   headers: new HttpHeaders().set('Content-Type', 'application/json'),
   observe: 'response',
 };

 addDemandeDeChantier(demandeDeChantier: DemandeDeChantier): Observable<any> {
   return this.http.post('/api/v1/demandedechantier/add', JSON.stringify(demandeDeChantier), this.options);
 }

 getDemandeDeChantierById(id:string): Observable<DemandeDeChantierGet> {
   return this.http.get<DemandeDeChantierGet>('/api/v1/get/demandedechantier/get/'+id);
 }
/*
 getAllDemandeDeChantiers(): Observable<any> {
   return this.http.get('/api/v1/demandedechantier/get');
 }
*/
 updateDemandeDeChantierById(id:string, demandeDeChantier: DemandeDeChantier): Observable<any> {
   return this.http.put('/api/v1/demandedechantier/update/'+id, JSON.stringify(demandeDeChantier), this.options);
 }

 deleteDemandeDeChantierById(id:string): Observable<any> {
   return this.http.delete('/api/v1/demandedechantier/delete/'+id);
 }
}
