import { Component, OnInit } from '@angular/core';
import { EnrollService} from './services/enroll.service';
import { UsersService} from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnrollService, UsersService]
})
export class AppComponent implements OnInit {
  title = 'eshopping';

constructor(){

}

  ngOnInit(){}

  users: { name: string; status: string; }[] = [];



}
