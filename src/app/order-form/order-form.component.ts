import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { DataServiceService, Todo } from '../data-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  ngOnInit(): void {

  }

  weatherControl: FormControl = new FormControl();
  userForm: FormGroup = new FormGroup({});
  todo$:Observable<Todo[]>;
  todo1$:Observable<Todo>;
  
  constructor(private dataService:DataServiceService) {
    this.weatherControl.valueChanges.pipe(
    debounceTime(500)
    ).subscribe(weather => console.log(weather));
    this.weatherControl.setValue("i");
    this.todo$ = this.dataService.getTodos1();
   }
   
  onFormSubmit() {
    console.log(this.weatherControl.value+this.dataService.url);
    this.todo1$ = this.dataService.getTodo1();
  }

  public getTodo():Observable<Todo[]>{
    return this.dataService.getTodos1();
  }
}
