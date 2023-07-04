import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css'],
  // providers: [UsersService]
})
export class UsersdetailsComponent implements OnInit {

  constructor(private userService: UsersService){

  }
  users!: {name: string, job: string, gender: string, country: string, age: number, avatar: string};

  ngOnInit(): void {
 this.userService.onShowDetails.subscribe((data: {name: string, job: string, gender: string, country: string, age: number, avatar: string})=>{
  this.users = data

     })
    
  }
}
