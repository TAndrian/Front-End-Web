import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { User } from 'src/app/shared/model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private currentUserSubject: BehaviorSubject<User>;
  private authentified: boolean = localStorage.getItem('currentUser')!=undefined;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    
  }

  public get currentUserValue(): User{
    return this.currentUserSubject.value;
  }

  public get userState(): boolean{
    return this.authentified
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'authentification/authentifier', { username, password })
      .pipe(mergeMap(token => 
        this.http.get<any>(environment.apiUrl + 'utilisateur/get/myself', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token["jwt"]) })
          .pipe(map(user => {
              
              let u = new User(user["id"],user["username"], user["password"], user["role"], token["jwt"]);
              this.currentUserSubject.next(u);
              this.authentified = true;
              localStorage.setItem('currentUser', JSON.stringify(u));
              return user;
            }))));
  }
  
  logout(): void {

    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.authentified = false; 
  }
}
/*pipe(map(token => {
        this.http.get<any>(environment.apiUrl + 'utilisateur/get/myself', {headers: new HttpHeaders().set('Authorization', 'Bearer '+ token["jwt"]) })
          .pipe(
            map(user => {
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
          })
        )
            
          
        
        }));*/

        /*return this.http.post<any>(environment.apiUrl + 'authentification/authentifier', { username, password })
      .pipe((token => {
        console.log("token "+ JSON.stringify(token))
        return this.http.get<any>(environment.apiUrl + 'utilisateur/get/myself', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token["jwt"]) })
          .pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          }));
      }));*/

      /*return this.http.post<any>(environment.apiUrl + 'authentification/authentifier', { username, password })
      .pipe(map(token => {
        localStorage.setItem('currentUser', JSON.stringify(new User(1, 'Juan', 'Juan', RoleType.ADMINISTRATION, JSON.stringify(token))));
        let user = new User(1, 'Juan', 'Juan', RoleType.ADMINISTRATION, JSON.stringify(token));
        this.currentUserSubject.next(user);
        return user;
      }
        )
        
      );
      
      
      
      
      












            this.http.post<any>(environment.apiUrl + 'authentification/authentifier', { username, password })
      .subscribe(token => {
        console.log("token "+JSON.stringify(token));
        this.http.get<any>(environment.apiUrl + 'utilisateur/get/myself', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token["jwt"]) })
          .subscribe(user => {
              console.log("user " + JSON.stringify(user));
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
            });
      });
    
    let result = this.currentUserSubject.asObservable();

    console.log("USER "+ this.currentUserSubject.getValue());
    return result;
      */