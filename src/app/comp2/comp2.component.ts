import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscriber, interval } from 'rxjs';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']

})
export class Comp2Component implements OnInit {
  title = 'Rxjs Subject';

  constructor(private DataService: DataService){

  }
  counterObservable = interval(1000)
  counterSub:any;

  ngOnInit(): void {
    this.DataService.dataEmmiter.subscribe((value)=>{
      this.enteredText = value
    })

    // this.counterSub = this.counterObservable.subscribe((val)=>{
    //   console.log(val);
      
    // })




    
  }
  enteredText: string = 'Hackthor Angular'

unsubscribe(){
  this.counterSub.unsubscribe()
}
subscribe(){
  this.counterSub = this.counterObservable.subscribe((val)=>{
    console.log(val);
    
  })

}



}
