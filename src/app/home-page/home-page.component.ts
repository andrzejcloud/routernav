import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  greeting: string = "witam";
  powitanie: string = "witam";
  constructor() { }

  ngOnInit() {
  }

  public onInputChange(event:Event):void{
    let inputElement = <HTMLInputElement>event.target
    console.log("input: " +inputElement.value);
    console.log("input atr: " +inputElement.getAttribute("value"));
    console.log("input k: " +this.greeting);
  }

  
  public onInputTarget({target}):void{
    this.greeting = target.value;
    console.log("input: " +target.value);
    console.log("input atr: " +target.getAttribute("value"));
    console.log("input k: " +this.greeting);
    
  }
}
