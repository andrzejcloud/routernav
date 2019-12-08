import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, BackendUrl } from './app.component';
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
import { FormOneComponent } from './form-one/form-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { OrderFormComponent } from './order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProductPageComponent,
    HomePageComponent,
    Component404Component,
    ProductDescriptionComponent,
    ProductSellerComponent,
    PriceQuoterComponent,
    FormOneComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopingModule,
    ShopingRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [{provide:BackendUrl, useValue: "https://jsonplaceholder.typicode.com/todos"}],
  bootstrap: [AppComponent]
})
export class AppModule { }

