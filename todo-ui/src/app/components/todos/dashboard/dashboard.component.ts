import { Component, OnInit } from '@angular/core';
import { Todo } from '../add/todo';
import { TodoService } from 'src/app/services/todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.todoService.findAll().subscribe(data => this.todos = data);
  }

  onDeleteTodo(id: number) {
    this.todoService.delete(id);
    this.snackBar.open("Your todo is deleted.", "Ok", {
      duration: 2000,
    });
    this.init();
  }

  onUpdateTodo(id: number) {
    console.log(id);
  }

}
