import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Student } from '../student.model';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 @Output() studentWasSelected = new EventEmitter<Student>();
students : Student[] = [
new Student('A Test Student','This is a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
new Student('Another Test Student','This is second test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
];
  constructor() { }

  ngOnInit() {
  }
    onStudentSelected(student: Student) {
   this.studentWasSelected.emit(student);
  }

}
