import { Component, OnInit } from '@angular/core';
import { Todo } from '../add/todo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  todoModel = new Todo(0, "", "");

  constructor(private todoService: TodoService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.todoService.findById(id)
                      .subscribe(todo => this.todoModel = todo);
    });
  }

  submitForm(todoForm: any) {
    if (todoForm.form.valid) {
      this.todoService.update(this.todoModel.id, todoForm.value);
      this.snackBar.open("Your todo is updated.", "Ok", {
        duration: 2000,
      });
    }
  }

}
