import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';



@NgModule({
  declarations: [ViewTeacherComponent, AddTeacherComponent, EditTeacherComponent],
  imports: [
    CommonModule
  ]
})
export class TeacherModule { }
