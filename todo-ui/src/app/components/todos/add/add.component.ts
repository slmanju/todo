import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from 'src/app/services/todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  todoModel = new Todo(0, "", "");

  constructor(private todoService: TodoService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  submitForm(todoForm: any) {
    if (todoForm.form.valid) {
      this.todoService.save(todoForm.value);
      this.snackBar.open("Your todo is saved.", "Ok", {
        duration: 2000,
      });
    }
  }

}
