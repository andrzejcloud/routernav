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
import { ShopingModule } from './shoping/shoping.module';
import { ShopingRoutingModule } from './shoping/shoping-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceQuoterComponent } from './price-quoter/price-quoter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProductPageComponent,
    HomePageComponent,
    Component404Component,
    ProductDescriptionComponent,
    ProductSellerComponent,
    PriceQuoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopingModule,
    ShopingRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
