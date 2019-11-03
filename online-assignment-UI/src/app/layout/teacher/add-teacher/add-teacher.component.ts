import { Component, OnInit } from '@angular/core';
import { TeacherModel } from '../teacher.model';
import { UserModel } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  teacher:TeacherModel;
  errors:String;
  constructor() { 
    this.teacher = new TeacherModel();
    this.teacher.user = new UserModel();
    this.errors= new String();
  }

  ngOnInit() {
  }

}
