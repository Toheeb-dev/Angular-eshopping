import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor() { }

  OnErrollCliicked(title:string){
    alert('Thanks for checking the button to enroll the ' + title + 'course')
  
  }
}
