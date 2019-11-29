import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SubjectSerivce } from '../subject/subject.service';


@NgModule({
  declarations: [AddQuestionComponent, ViewQuestionComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule
  ],
  providers : [SubjectSerivce]
})
export class QuestionModule { }
