import { Injectable } from '@angular/core';
import { Todo } from '../components/todos/add/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  save(todo: Todo) {
    console.log(todo);
  }

  findAll() {

  }

  update(todo: Todo) {
    
  }

  delete(todo: Todo) {

  }

}
