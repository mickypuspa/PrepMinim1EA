import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectComponent } from './subject/subject.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/admin' },
  { path: 'admin', component: AdminComponent},
  { path: 'students', component: StudentComponent},
  { path: 'subjects', component: SubjectComponent},
  { path: 'subjects/add/:subjectName', component: StudentFormComponent},
  { path: 'newSubject', component: SubjectFormComponent},
  { path: 'newStudent', component: StudentFormComponent},
  { path: 'newStudent/:subjectName', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }