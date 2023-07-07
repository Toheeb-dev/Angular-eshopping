import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataService{

    constructor(){}

    // dataEmmiter =  new EventEmitter<string>()
    dataEmmiter =  new Subject<string>()

    onEmit(data:string){

        // this.dataEmmiter.emit(data)
      this.dataEmmiter.next(data)

    }
//     Ese Malemi...Legal method 
// Abiola sanni. ...Legal methods
// Black law dictionary....11th edition

}