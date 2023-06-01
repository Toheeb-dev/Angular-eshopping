import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit{

constructor (){}

ngOnInit(): void {
        
}

searchValue: string = '';

chgSearchValue(eventData: Event){
    console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value
    
}
@Output()
searchProdChanged: EventEmitter<string> = new EventEmitter();
onChangeSearch(){
    this.searchProdChanged.emit(this.searchValue)
    // console.log(this.searchValue);
    
}

}