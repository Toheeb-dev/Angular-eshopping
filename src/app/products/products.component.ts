import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  products = [
    { p_id: "1", p_name: "Samsung Galaxy S7 Edge", availability: "available", color: "black", p_image: "/assets/download.jfif", p_price: 28990 },
    { p_id: "2", p_name: "iPhone 13", availability: "available", color: "white", p_image: "/assets/images.jfif", p_price: 60138 },
    { p_id: "3", p_name: "Sony Xperia Z3+", availability: "Not available", color: "black", p_image: "/assets/download 2.jfif", p_price: 1519000 },
    { p_id: "4", p_name: "ALIENWARE 17", availability: "available", color: "black", p_image: "/assets/alienware.jfif", p_price: 75187 },
    { p_id: "5", p_name: "Luvaglio Laptop", availability: "Not available", color: "Gold", p_image: "/assets/luvaglio.jfif", p_price: 50115000 },
    { p_id: "6", p_name: "Motorola Moto G4 16GB", availability: "Not available", color: "white", p_image: "/assets/motorola.jfif", p_price: 9013 }
  ];

  getAllProducts(){

    return this.products.length

  }
  getAvailable(){
    return this.products.filter((item, index, array)=>item.availability == 'available').length;
  }

  getNotAvailable(){
    return this.products.filter((item, index, array)=>item.availability == 'Not available').length;
  }
  
productSelected:string = 'All'

onProductSelected(data:string){

  this.productSelected = data;
  console.log(this.productSelected);

}
searchValue: string = '';

onSearchValue(Value:string){
this.searchValue = Value;
}

}
