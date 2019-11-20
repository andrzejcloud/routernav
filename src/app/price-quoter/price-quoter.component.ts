import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.css']
})
export class PriceQuoterComponent implements OnInit {
@Output() lastPrice: EventEmitter <IPriceQuote> = new EventEmitter();
  constructor() { 
    setInterval(()=>{
      let priceQuote: IPriceQuote = {
        stockSymbol: "PLK",
        lastPrice: 100*Math.random()
      };
      this.lastPrice.emit(priceQuote);
    },10000);
  }

  ngOnInit() {
  }

}

export interface IPriceQuote{
  stockSymbol: string;
  lastPrice: number;
}