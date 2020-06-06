import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  user1: IUser = {
    _id: '1',
    email: 'hoahocxt@gmail.com',
    name: 'Tran Luong bang',
    password: '12345678',
    role: 'Planner'
  };
  user2: IUser = {
    _id: '2',
    email: 'hoahocxt@gmail.com',
    name: 'Tran Luong bang',
    password: '12345678',
    role: 'Planner'
  };
  user3: IUser = {
    _id: '3',
    email: 'hoahocxt@gmail.com',
    name: 'Tran Luong bang',
    password: '12345678',
    role: 'Planner'
  };
  user4: IUser = {
    _id: '4',
    email: 'hoahocxt@gmail.com',
    name: 'Tran Luong bang',
    password: '12345678',
    role: 'Planner'
  };

  users: IUser[] = [this.user1, this.user2, this.user3, this.user4];

  getListUser(): IUser[] {
    return this.users;
  }

}
