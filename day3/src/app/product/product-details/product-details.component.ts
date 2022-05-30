import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { ProductsserviceService } from '../productsservice.service';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product?:Iproducts

  constructor( private productDetails:ProductsserviceService,
               private activeroute:ActivatedRoute, 
               private location:Location
               ) { }

  ngOnInit(): void {
    // Get product id from url
    this.activeroute.params.subscribe( param => {
      let productId =  param['id']
      this.productDetails.getProduct(productId)
      this.product = this.productDetails.getProduct(productId)
      
    })
    
  }

}
