import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopingRoutingModule } from './shoping-routing.module';
import { ShoppingComponentComponent } from './shopping-component/shopping-component.component';


@NgModule({
  declarations: [ShoppingComponentComponent],
  imports: [
    CommonModule,
    ShopingRoutingModule
  ]
})
export class ShopingModule { }
