import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

import { Observable, fromEvent, interval, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  greeting: string = "witam";
  powitanie: string = "witam";

  inputFilter: FormControl = new FormControl();

  @ViewChild('input')
  input: ElementRef;

  input$ = fromEvent<any>(input, 'keyup');

  constructor() {
    this.inputFilter.valueChanges.pipe(debounceTime(200)).subscribe(
      value=>console.log(value),
      error =>console.log(error)
    );
   }

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
