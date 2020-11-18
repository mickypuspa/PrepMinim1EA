import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject';
import { SubjectService } from '../services/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  
  subjects: Subject[];

  constructor(public subjectService: SubjectService, private router: Router) { }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe (subjects => {
      this.subjects = subjects;
    })
  }

  addSubject() {
    this.router.navigateByUrl('/newSubject');
  }

  admin() {
    this.router.navigateByUrl('/admin');
  }
}