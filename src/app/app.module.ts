import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ShowTasksComponent } from './task/show-tasks/show-tasks.component';
import { AddEditTasksComponent } from './task/add-edit-tasks/add-edit-tasks.component';
import { UsersComponent } from './users/users.component';
import { ShowUserComponent } from './users/show-user/show-user.component';
import { AddEditUserComponent } from './users/add-edit-user/add-edit-user.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ShowTasksComponent,
    AddEditTasksComponent ,
    UsersComponent,
    ShowUserComponent,
    AddEditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
