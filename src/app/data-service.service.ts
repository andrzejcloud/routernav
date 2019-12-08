import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendUrl } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url: string = "urlAddress";
  constructor(private _http: HttpClient, @Inject(BackendUrl) public backendUrl:string) { }

public getTodos():void{
  this._http.get<Todo>("https://jsonplaceholder.typicode.com/todos/1").subscribe(
    task=>console.log(task.title)
  );
}

public getTodos1():Observable<Todo[]>{
  return this._http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos/");
}

public getTodo1():Observable<Todo>{
  return this._http.get<Todo>(this.backendUrl+"/1");
}

}

export class Todo{
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
