import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from './add/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.todoService
        .findAll()
        .subscribe((data) => {
            this.todos = data;
        });
  }

  onDeleteTodo(id: number) {
    this.todoService.delete(id);
    this.snackBar.open("Your todo is deleted.", "Ok", {
      duration: 2000,
    });
    this.init();
  }

}
