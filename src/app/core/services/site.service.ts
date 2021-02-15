import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Site} from '../../shared/model/site';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SiteService {

    options: any = {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        observe: 'response',
    };

    constructor(private http: HttpClient) {

    }

    addSite(site: Site): Observable<any> {
        return this.http.post(environment.apiUrl + 'site/add', site, this.options);
    }

    getSiteById(id: string): Observable<any> {
        return this.http.get(environment.apiUrl + 'site/get/' + id);
    }

    /*
     getAllSites(): Observable<any> {
       return this.http.get(environment.apiUrl + 'site/get');
     }
    */
    updateSiteById(id: string, site: Site): Observable<any> {
        return this.http.put(environment.apiUrl + 'site/update/' + id, site, this.options);
    }

    deleteSiteById(id: string): Observable<any> {
        return this.http.delete(environment.apiUrl + 'site/delete/' + id);
    }
}
