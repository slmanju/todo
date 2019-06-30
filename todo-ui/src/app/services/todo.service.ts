import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../components/todos/add/todo';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = 'http://localhost:8080/';

  fakeTodos = [
    { id: 1, title: 'Todo-1', description: 'this is todo 1' },
    { id: 2, title: 'Todo-2', description: 'this is todo 2' },
    { id: 3, title: 'Todo-3', description: 'this is todo 3' },
  ];

  constructor(private httpClient: HttpClient) { }

  save(todo: Todo) {
    // return this.httpClient.post(this.baseUrl, todo);
    todo.id = this.fakeTodos[this.fakeTodos.length - 1].id + 1;
    this.fakeTodos.push(todo);
  }

  findAll() {
    // return this.httpClient.get<Todo[]>(this.baseUrl);
    return of(this.fakeTodos);
  }

  findById(id: number) {
    return of(this.fakeTodos.find(todo => todo.id === id));
    // return this.httpClient.get<Todo>(this.baseUrl + '/' + id);
  }

  update(todo: Todo) {
    return this.httpClient.put(this.baseUrl + '/' + todo.id, todo);
  }

  delete(id: number) {
    this.fakeTodos = this.fakeTodos.filter(todo => todo.id !== id);
    // return this.httpClient.delete(this.baseUrl + '/' + id);
  }

}
