import {Injectable} from '@angular/core';
import {Student} from '../shared/model/student';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    options: any = {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        observe: 'response',
    };

    constructor(
        private http: HttpClient
    ) {
    }

    post(student: Student): Observable<any> {
        return this.http.post(environment.apiUrl + 'student/add', student, this.options);
    }
}
