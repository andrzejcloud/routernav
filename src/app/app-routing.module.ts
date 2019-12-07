import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { Component404Component } from './component404/component404.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { ShopingModule } from './shoping/shoping.module';
import { OrderFormComponent } from './order-form/order-form.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'product/:id/:id2', component: ProductPageComponent,
  children: [
    {path: '', component: ProductDescriptionComponent},
    {path: 'seller', component: ProductSellerComponent}
  ]
   },
   {path: 'luxury', loadChildren: './luxury-product/luxury-product.module'},
   {path: 'order', component: OrderFormComponent},
  {path: '**', component: Component404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ShopingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
