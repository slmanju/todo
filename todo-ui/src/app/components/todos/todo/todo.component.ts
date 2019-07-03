import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../add/todo';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output("onDelete") onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDeleteTodo(id: number) {
    console.log("onDeleteTodo" + id);
    this.onDelete.emit(id);
  }

}
