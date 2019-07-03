import { Component, OnInit } from '@angular/core';
import { Todo } from '../add/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo = new Todo(1, "Hello", "Hello todo component");

  constructor() { }

  ngOnInit() {
  }

}
