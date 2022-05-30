import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductFavoriteComponent } from './product/product-favorite/product-favorite.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliceproductPipe } from './product/sliceproduct.pipe';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductFavoriteComponent,
    SliceproductPipe,
    NavbarComponent,
    SliceproductPipe,
    ProductDetailsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
