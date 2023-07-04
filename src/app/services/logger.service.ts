import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logMessage(name: string , status: string){

    console.log('A new user with the username "' + name+ '" with the status ' + status + ' has been added');
    
    
  }
}
