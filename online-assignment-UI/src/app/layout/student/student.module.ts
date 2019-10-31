import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout.module';
import { StudentRoutingModule } from './student-routing-module';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [ViewStudentComponent, AddStudentComponent, EditStudentComponent],
  imports: [
    CommonModule,
    LayoutModule,
    StudentRoutingModule,
    NgxDatatableModule 
  ]
})
export class StudentModule { }
