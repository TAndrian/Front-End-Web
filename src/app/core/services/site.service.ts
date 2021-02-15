import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Site } from '../../shared/model/site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http: HttpClient) {
    
  }
  options: any = {
   headers: new HttpHeaders().set('Content-Type', 'application/json'),
   observe: 'response',
 };

 addSite(site: Site): Observable<any> {
   return this.http.post('/api/v1/site/add', site, this.options);
 }

 getSiteById(id:string): Observable<any> {
   return this.http.get('/api/v1/site/get/'+id);
 }
/*
 getAllSites(): Observable<any> {
   return this.http.get('/api/v1/site/get');
 }
*/
 updateSiteById(id:string, site: Site): Observable<any> {
   return this.http.put('/api/v1/site/update/'+id, site, this.options);
 }

 deleteSiteById(id:string): Observable<any> {
   return this.http.delete('/api/v1/site/delete/'+id);
 }
}
