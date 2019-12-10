import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentRoutingModule } from './assignment-routing.module';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';
import { ViewAssignmentComponent } from './view-assignment/view-assignment.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { QuestionService } from '../question/question.service';
import { SubjectSerivce } from '../subject/subject.service';
import { AssignmentService } from './assignment.service';
import { StudentService } from '../student/student.service';


@NgModule({
  declarations: [SubmitAssignmentComponent, ViewAssignmentComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    HttpModule,
    FormsModule,
    NgxDatatableModule
  ],
  providers: [QuestionService, SubjectSerivce, AssignmentService, StudentService]
})
export class AssignmentModule {
  
 }
