import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUri: string = "";
  Users: User[] = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUri: string) {
    this.apiUri = `${baseUri}api/users`;
    console.log(this.apiUri);
  }

  //Functions pertaining to users

  getAllUsers() {
    return this.http.get<User[]>(this.apiUri);
  }

  getUser(UserName: string) {
    return this.http.get(`${this.apiUri}/${UserName}`);
  }

  addUser(user: User) {
    return this.http.post<User>(`${this.apiUri}`, { "UserName": user.UserName, "Email": user.Email });
  }

  deleteUser(UserName: string) {
    return this.http.delete(`${this.apiUri}/${UserName}`);
  }
}
