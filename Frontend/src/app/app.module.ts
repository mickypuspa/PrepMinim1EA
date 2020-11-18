import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectCardComponent } from './subject-card/subject-card.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentCardComponent } from './student-card/student-card.component';

//formulario reactivo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentFormComponent } from './student-form/student-form.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    SubjectCardComponent,
    SubjectComponent,
    StudentCardComponent,
    SubjectFormComponent,
    StudentFormComponent,
    StudentComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }