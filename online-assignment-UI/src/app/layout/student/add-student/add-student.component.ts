import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../student.model';
import { UserModel } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  student: StudentModel;
  errors:String = new String(" ");
  constructor() {
   this.student = new StudentModel();
   this.student.user = new UserModel();
   }

  ngOnInit() {
   
  }

}
