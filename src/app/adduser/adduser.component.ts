import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  // providers: [UsersService]
})
export class AdduserComponent implements OnInit {

  constructor(private userservice: UsersService, private loggerService: LoggerService){

  }
  username: string = '';
  status!: string;
  ngOnInit(): void {
    
  }

  addUser(){

    this.userservice.addNewUser(this.username, this.status)
    // console.log(this.userservice.users);
    this.loggerService.logMessage(this.username, this.status)
    

  }

}
