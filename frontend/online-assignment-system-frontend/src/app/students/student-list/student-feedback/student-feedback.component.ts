import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Student } from '../../student.model';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent implements OnInit {
  @Input() student: Student;
  @Output() studentSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
   onSelected() {
    this.studentSelected.emit();
  }

}
