import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../../shared/model/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {

  }
  options: any = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
    observe: 'response',
  };

  addClient(client: Client): Observable<any> {
    console.log('json: '+JSON.stringify(client));
    return this.http.post('/api/v1/client/add', JSON.stringify(client), this.options);
  }

  getClientById(id: string): Observable<Client> {
    return this.http.get<Client>('/api/v1/client/get/' + id);
  }
/*
  getAllClients(): Observable<any> {
    return this.http.get('/api/v1/client/get');
  }
*/
  updateClientById(id: string, client: Client): Observable<any> {
    return this.http.put('/api/v1/client/update/' + id, client, this.options);
  }

  deleteClientById(id: string): Observable<any> {
    return this.http.delete('/api/v1/client/delete/' + id);
  }

}
