import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  theProducts: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getTextDecoration(outOfStock = false){
    if (outOfStock) {
      return 'line-through';
    }else{
      return 'none';
    }
  }

  
  loadProducts(){
    const products: Product[] = [
      {
      id: 1,
      productName: 'white shirt',
      amount: 1000,
      category: 'clothes',
      outOfStock: false,
    },
      {
      id: 1,
      productName: 'blue shirt',
      amount: 1500,
      category: 'clothes',
      outOfStock: false,
    },
      {
      id: 1,
      productName: 'Agbada',
      amount: 3000,
      category: 'clothes',
      outOfStock: true,
    },
      {
      id: 1,
      productName: 'white shoe',
      amount: 2500,
      category: 'shoes',
      outOfStock: true,
    },
      {
      id: 1,
      productName: 'palm sandal',
      amount: 1000,
      category: 'shoes',
      outOfStock: false,
    },
  ];
  
    this.theProducts = products;
  }

}
