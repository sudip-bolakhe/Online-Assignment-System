import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SubjectSerivce } from '../subject/subject.service';
import { HttpModule } from '@angular/http';
import { QuestionService } from './question.service';
import { TeacherService } from '../teacher/teacher.service';


@NgModule({
  declarations: [AddQuestionComponent, ViewQuestionComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers : [SubjectSerivce, QuestionService, TeacherService]
})
export class QuestionModule { }
