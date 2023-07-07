import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit{
  titile = 'Observable';

  // USING "NEW" METHOD TO CREATE OBSERVABLE
  // myObservable = new Observable((observer)=>{
  //   console.log('Observable begins now');
  //   setTimeout(() => {
  //     observer.next('1')
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2')
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3')
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next('3')
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('3')
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.error(new Error('Something went wrong, please try again later'))
  //   },6000);
  //   setTimeout(() => {
  //     observer.complete()
  //   },7000);
  //   setTimeout(() => {
  //     observer.next('5')
  //   }, 8000);
    // observer.next('1')
    // observer.error(new Error('Something went wrong, please try again later'))
    // observer.complete()
    // observer.next('4')
    // observer.next('5')
  
  // });


  // USING "CREATE" METHOD TO CREATE OBSERVABLE
  // myObservable = Observable.create((observer: any)=>{

  // setTimeout(() => {
  //   observer.next('A')
  // }, 1000);
  // setTimeout(() => {
  //   observer.next('B')
  // }, 2000);
  // setTimeout(() => {
  //   observer.next('C')
  // }, 3000);
  // setTimeout(() => {
  //   observer.next('D')
  // }, 4000);
  // observer.next('B')
  // observer.next('C')
  // setTimeout(() => {
  //   observer.error(new Error('Something went wrong'))
    
  // }, 7000);
  // setTimeout(() => {
  //   observer.complete()
    
  // }, 7000);
 

  // });
// USING "of" METHOD TO CRAETE OBSERVABLE
// it emits data as they are and can has many arguments as possible
array1=[1, 2,3,4,5,6,7];
array2 = ['A', 'B', 'C', 'D', 'E']
// myObservable = of(this.array1, this.array2, 200, true, 'Hello')

// USING "from" METHOD TO CREATE OBSERVABLE
// it emits data intirablely i.e it loops over all the data to be emitted and can has only one argument
// and can accept 'promise operator'
myObservable = from(this.array1).pipe(map((val)=> 5* val), filter((val)=> val % 2 == 0))
// trasnformedObs = this.myObservable.pipe(map((val)=> 5*val ), filter((val)=> val % 2 == 0));
// filteredObs = this.trasnformedObs.pipe(filter((val)=> val % 2 == 1))
ngOnInit(): void {
  this.myObservable.subscribe((val)=>{
    console.log(val);
    
  }, (error)=>{
    // alert(error.message);
    console.log(error.message);
  }, ()=>{
    alert('observable has completed emitting all values')
  })
}


}
