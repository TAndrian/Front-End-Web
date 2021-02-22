import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DemandeDeChantier} from '../../shared/model/demandeDeChantier';
import {DemandeDeChantierGet} from '../../shared/model/demandeDeChantierGet';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DemandeDeChantierService {


    options: any = {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        observe: 'response',
    };

    constructor(private http: HttpClient) {

    }

    addDemandeDeChantier(demandeDeChantier: DemandeDeChantier): Observable<any> {
        return this.http.post(environment.apiUrl + 'demandedechantier/add', JSON.stringify(demandeDeChantier), this.options);
    }

    getDemandeDeChantierById(id: string): Observable<DemandeDeChantierGet> {
        return this.http.get<DemandeDeChantierGet>(environment.apiUrl + 'demandedechantier/get/' + id);
    }


    getAllDemandeDeChantiers(): Observable<DemandeDeChantierGet[]> {
        return this.http.get<DemandeDeChantierGet[]>(environment.apiUrl + 'demandedechantier/get');
    }

    updateDemandeDeChantierById(id: string, demandeDeChantier: DemandeDeChantier): Observable<any> {
        return this.http.put(environment.apiUrl + 'demandedechantier/update/' + id, JSON.stringify(demandeDeChantier), this.options);
    }

    deleteDemandeDeChantierById(id: string): Observable<any> {
        return this.http.delete(environment.apiUrl + 'demandedechantier/delete/' + id);
    }
}
