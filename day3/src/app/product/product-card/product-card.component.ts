import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproducts } from '../iproducts';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  
  name:string='mostafa'
  @Input() product?:Iproducts   
  constructor( private route: Router ) { }
  ngOnInit(): void {
    
  }
  

}
