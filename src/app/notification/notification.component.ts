import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-notification',
  template: `<div class="notification-nav fw-bold alert alert-success position-sticky" [ngClass]="{fadeOut: DisplayNotification}">
    <p>This website uses cookies for better users experience</p> 
    <button class="close btn-close me-2 m-auto" (click)="closeButton()">
    </button>
    </div>
        ` ,
  styles: [".notification-nav{margin:18px auto; padding:10px; text-align:center;}", 
  "p{text-align:center}", ".close{margin: -25px 10px}",
   ".fadeOut {visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"
  ]
})

export class NotificationComponent implements OnInit{

  constructor(){

  }
  
  ngOnInit(): void {
    
  }

DisplayNotification:boolean = false

closeButton(){
  this.DisplayNotification = true    

}

}
