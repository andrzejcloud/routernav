import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Component404Component } from './component404/component404.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { LuxuryProductModule } from './luxury-product/luxury-product.module';
import { ShopingModule } from './shoping/shoping.module';
import { ShopingRoutingModule } from './shoping/shoping-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProductPageComponent,
    HomePageComponent,
    Component404Component,
    ProductDescriptionComponent,
    ProductSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LuxuryProductModule,
    ShopingModule,
    ShopingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
