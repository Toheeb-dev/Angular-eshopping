import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(){

}

  ngOnInit(): void {
    
  }
slogan:string = "We are shooping on the cloud of the internet";
source:string = "../../assets/istockphoto-1193750118-612x612.jpg";

getSlogan(){
return "This a new button for shopping new goods"
}

}
