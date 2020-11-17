import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { SubjectCardComponent } from './subject-card/subject-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    SubjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
