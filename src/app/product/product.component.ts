import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  myColor = 'blue';

  constructor() { }

  ngOnInit(): void {
  }

  alertMe(){
    alert('Hello World');
  }

  changeColorToRed(){
    if (this.myColor == 'blue') {
      this.myColor = 'red';
    }else{
      this.myColor = 'blue';
    }
    
  }

}
