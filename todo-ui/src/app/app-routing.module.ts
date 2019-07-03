import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddComponent } from './components/todos/add/add.component';
import { TodoDashboardComponent } from './components/todos/dashboard/dashboard.component';
import { UpdateComponent } from './components/todos/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: TodoDashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'add-todo',
    component: AddComponent
  },
  {
    path: 'update-todo/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
