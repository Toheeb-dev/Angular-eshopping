import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private logger: LoggerService) { }

  users = [
    {name: 'Faith', status: 'active'},
    {name: 'Mark', status: 'inactive'},
    {name: 'John', status: 'active'},

  ];
  allUsers = [
    {name: 'Faith', job: 'designer', gender: 'female', country: 'United State', age: 35, avatar: 'assets/alienware.jfif'},
    {name: 'John', job: 'developer', gender: 'male', country: 'France', age: 30, avatar: 'assets/images.jfif'},
    {name: 'Steve', job: 'gamer', gender: 'male', country: 'China', age: 15, avatar: 'assets/motorola.jfif'},
    {name: 'Eric', job: 'hacker', gender: 'male', country: 'Nigeria', age: 20, avatar: 'assets/luvaglio.jfif'},

  ];
  addNewUser (name: string, status: string){
    this.users.push({name: name, status: status});
  }
  onShowDetails = new EventEmitter<{name: string, job: string, gender: string, country: string, age: number, avatar: string}>
  showUsersDetail(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}){
    this.onShowDetails.emit(user)
  }

}
