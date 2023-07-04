import { Component,OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css'],
  // providers: [UsersService]
})
export class AllusersComponent implements OnInit {

  constructor(private userservice: UsersService){

  }

  ngOnInit(){
    this.allUsers = this.userservice.allUsers

  }

allUsers:{name: string, job: string, gender: string, country: string, age: number, avatar: string}[]= []

showDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}){
this.userservice.showUsersDetail(user)
}
}
