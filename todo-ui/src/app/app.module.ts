import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from  '@angular/common/http';

import { MaterialModule } from './modules/material.module';
import { AboutComponent } from './components/about/about.component';
import { AddComponent } from './components/todos/add/add.component';
import { TodoService } from './services/todo.service';
import { TodoComponent } from './components/todos/todo/todo.component';
import { TodoDashboardComponent } from './components/todos/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddComponent,
    TodoDashboardComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ TodoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
