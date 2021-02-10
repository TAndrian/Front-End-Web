import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {DemandeDeChantier} from '../../model/demandeDeChantier';
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
   return this.http.post('/api/v1/demandeDeChantier/add', demandeDeChantier, this.options);
 }

 getDemandeDeChantierById(id:string): Observable<any> {
   return this.http.get('/api/v1/get/demandeDeChantier/get/'+id);
 }
/*
 getAllDemandeDeChantiers(): Observable<any> {
   return this.http.get('/api/v1/demandeDeChantier/get');
 }
*/
 updateDemandeDeChantierById(id:string, demandeDeChantier: DemandeDeChantier): Observable<any> {
   return this.http.put('/api/v1/demandeDeChantier/update/'+id, demandeDeChantier, this.options);
 }

 deleteDemandeDeChantierById(id:string): Observable<any> {
   return this.http.delete('/api/v1/demandeDeChantier/delete/'+id);
 }
}
