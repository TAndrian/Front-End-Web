import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoleType } from 'src/app/shared/model/roleType';
import { User } from 'src/app/shared/model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User{
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'authentification/authentifier', { username, password })
      .pipe(map(token => {
        localStorage.setItem('currentUser', JSON.stringify(new User(1, 'Juan', 'Juan', RoleType.ADMINISTRATION, JSON.stringify(token))));
        let user = new User(1, 'Juan', 'Juan', RoleType.ADMINISTRATION, JSON.stringify(token));
        this.currentUserSubject.next(user);
        return user;
      }
        )
        
      );
  }
  
  logout(): void {

    localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
  }
}
