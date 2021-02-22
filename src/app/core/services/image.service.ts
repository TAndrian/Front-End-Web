import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { report } from 'process';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  options: any = {
    observe: 'response',
};

  optionsProgress: any = {
    reportProgress: true,
  }

  constructor(private http: HttpClient) { }

  addImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image',file);
    return this.http.post(environment.apiUrl + 'image/add', formData , this.options);
  }


  getImage(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + 'image/get/'+id, this.options);
  }


}
