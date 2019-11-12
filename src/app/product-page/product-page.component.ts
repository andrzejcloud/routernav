import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private _activatedRoot: ActivatedRoute) { }

  ngOnInit() {
  }

  getId():string{
    return this._activatedRoot.snapshot.params['id'];
  }

  // isProd():boolean{
  //   return this._activatedRoot.snapshot.data[1]['isProd'];
  // }
}
