import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { ProductsserviceService } from '../productsservice.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products?:Iproducts[]
  name:string = 'ahmed'
  constructor( private productServ:ProductsserviceService ) { }

  ngOnInit(): void {
    this.products = this.productServ.getProducts()
  }




}
