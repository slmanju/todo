import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  todoModel = new Todo("", "");

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  submitForm(formValue: any) {
    this.todoService.save(formValue);
  }

}
