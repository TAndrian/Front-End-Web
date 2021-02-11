import { Injectable } from '@angular/core';
import {Student} from '../model/student';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
      private http: HttpClient
  ) { }
    options: any = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      observe: 'response',
    };

    post(student: Student): Observable<any> {
        return this.http.post('/api/v1/student/add', student, this.options);
    }
}
