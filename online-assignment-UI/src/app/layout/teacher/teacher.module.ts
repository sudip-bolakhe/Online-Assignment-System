import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [ViewTeacherComponent, AddTeacherComponent, EditTeacherComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule, NgxDatatableModule
  ]
})
export class TeacherModule { }
