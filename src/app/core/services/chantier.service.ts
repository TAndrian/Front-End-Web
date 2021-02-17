import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Chantier} from '../../shared/model/chantier';
import {environment} from '../../../environments/environment';
import {ChantierGet} from 'src/app/shared/model/chantierGet';

@Injectable({
    providedIn: 'root'
})
export class ChantierService {

    options: any = {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        observe: 'response',
    };

    constructor(private http: HttpClient) {

    }

    addChantier(chantier: Chantier): Observable<any> {
        return this.http.post(environment.apiUrl + 'chantier/add', JSON.stringify(chantier), this.options);
    }

    getChantierById(id: string): Observable<ChantierGet> {
        return this.http.get<ChantierGet>(environment.apiUrl + 'get/chantier/get/' + id);
    }

    
    getAllChantiers(): Observable<ChantierGet[]> {
        return this.http.get<ChantierGet[]>(environment.apiUrl + 'chantier/get');
    }
    
    updateChantierById(id: string, chantier: Chantier): Observable<any> {
        return this.http.put(environment.apiUrl + 'chantier/update/' + id, JSON.stringify(chantier), this.options);
    }

    deleteChantierById(id: string): Observable<any> {
        return this.http.delete(environment.apiUrl + 'chantier/delete/' + id);
    }
}
