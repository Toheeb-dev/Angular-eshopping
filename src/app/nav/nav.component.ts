import { Component, OnInit } from '@angular/core';
import { EnrollService} from '../services/enroll.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  // providers: [EnrollService]
})
export class NavComponent implements OnInit {

  constructor(private enrollService : EnrollService){

  }
  
  ngOnInit(): void {
    
  }
  title : string = "eshopping";

  enroll(){
    // const enrollService = new EnrollService
    this.enrollService.OnErrollCliicked(this.title)
  }
}
