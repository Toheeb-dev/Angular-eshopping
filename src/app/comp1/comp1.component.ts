import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  title = 'Rxjs Subject';
  constructor(private dataEmitter: DataService){

  }

  ngOnInit(): void {
    
  }

  inputText: string = 'Hackthor Angular'

  onEnter(){
    // console.log(this.inputText);
    this.dataEmitter.onEmit(this.inputText)
  }

}
