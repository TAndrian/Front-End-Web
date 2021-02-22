import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htt: HttpClient) { 
    
    
  }


  getUser() {
    
  }

  register(user: User) {
  }

  delete(id: number) {
  }

}
