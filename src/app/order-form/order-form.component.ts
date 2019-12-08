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
    this.dataService.getTodo1().subscribe(todo=>this.todo=todo,
      error=>console.log("url-------------------"));
  }

  weatherControl: FormControl = new FormControl();
  userForm: FormGroup = new FormGroup({});
  todo$:Observable<Todo[]>;
  todo:Todo;
  
  constructor(private dataService:DataServiceService) {
    this.weatherControl.valueChanges.pipe(
    debounceTime(500)
    ).subscribe(weather => console.log(weather));
    this.weatherControl.setValue("i");
    this.todo$ = this.dataService.getTodos1();
   }
   
  onFormSubmit() {
    console.log(this.weatherControl.value+this.dataService.url);
    this.dataService.getTodo1().subscribe(todo=>this.todo=todo);
  }

  public getTodo():Observable<Todo[]>{
    return this.dataService.getTodos1();
  }
}
