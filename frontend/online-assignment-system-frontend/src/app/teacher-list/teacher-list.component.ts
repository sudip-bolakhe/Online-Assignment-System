import { Component, OnInit } from '@angular/core';

import { Subject } from '../shared/subject.model';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
subjects: Subject[]=[
  new Subject('Java',2),
  new Subject('Web',5),
];
  constructor() { }

  ngOnInit() {
  }
   onSubjectAdded(subject: Subject) {
    this.subjects.push(subject);
  }

}
