import { Component } from '@angular/core';
import { Student } from './model/student';
import { Subject } from './model/subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  student : Student;
  subject : Subject;
}
