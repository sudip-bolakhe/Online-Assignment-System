import { Component, OnInit , ElementRef,ViewChild,EventEmitter, Output} from '@angular/core';

import { Subject } from '../../shared/subject.model';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {
@ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @Output() subjectAdded = new EventEmitter<Subject>();

  constructor() { }

  ngOnInit() {
  }
   onAddItem() {
    const subName = this.nameInputRef.nativeElement.value;
    const subAmount = this.amountInputRef.nativeElement.value;
    const newSubject = new Subject(subName, subAmount);
    this.subjectAdded.emit(newSubject);
  }

}
