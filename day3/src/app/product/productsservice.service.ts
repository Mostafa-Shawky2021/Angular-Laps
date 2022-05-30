import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts'
import { products } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductsserviceService {

  products?:Iproducts[]
  
  constructor() { 
   this.products = products
  }
  getProducts() {
    return this.products
  }
  getProduct(productId:number) {
    return  this.products?.find( products => products.id == productId )
  }

}
