import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  newProduct = '';
  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    this.newProduct = 'Product has been reset';
  }

}
