import { Component, OnInit } from '@angular/core';
import { EnrollService} from './services/enroll.service';
import { UsersService} from './services/users.service';
import { LoggerService } from './services/logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnrollService, UsersService, LoggerService]
})
export class AppComponent implements OnInit {
  title = 'eshopping';

constructor(private userService: UsersService){

}

users: { name: string; status: string; }[] = [];
  ngOnInit(){
    this.users = this.userService.users
  }




}
