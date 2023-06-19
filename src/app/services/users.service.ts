import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users = [
    {name: 'Faith', status: 'active'},
    {name: 'Mark', status: 'inactive'},
    {name: 'John', status: 'active'},

  ]
}
