import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

constructor(){}

  ngOnInit(): void {
    
  }


  @Input() all:number = 0;
  @Input() available:number = 0;
  @Input('unavail') notavailable:number = 0;


  selectedFilter : string = 'All'

  @Output()
  changeSelectedFilter : EventEmitter<string> = new EventEmitter();

  onSelect(){
    this.changeSelectedFilter.emit(this.selectedFilter)
    // console.log(this.selectedFilter);
    
  }

}
