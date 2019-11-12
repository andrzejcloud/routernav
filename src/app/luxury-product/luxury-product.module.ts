import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxProductComponent } from './lux-product/lux-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LuxProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: 'luxury', component: LuxProductComponent}])
  ],
})
export class LuxuryProductModule { }
