import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from '../../shared/model/client';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    options: any = {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        observe: 'response',
    };

    constructor(private http: HttpClient) {

    }

    addClient(client: Client): Observable<any> {
        console.log('json: ' + JSON.stringify(client));
        return this.http.post(environment.apiUrl + 'client/add', JSON.stringify(client), this.options);
    }

    getClientById(id: string): Observable<Client> {
        return this.http.get<Client>(environment.apiUrl + 'client/get/' + id);
    }


    getAllClients(): Observable<any> {
        return this.http.get(environment.apiUrl + 'client/get');
    }

    updateClientById(id: string, client: Client): Observable<any> {
        return this.http.put(environment.apiUrl + 'client/update/' + id, client, this.options);
    }

    deleteClientById(id: string): Observable<any> {
        return this.http.delete(environment.apiUrl + 'client/delete/' + id);
    }

}
