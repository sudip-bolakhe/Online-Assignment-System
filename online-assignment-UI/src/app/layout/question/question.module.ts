import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SubjectSerivce } from '../subject/subject.service';
<<<<<<< HEAD
import { HttpModule } from '@angular/http';
=======
>>>>>>> 557233ebf6ea2aea1e99a37900beca0f4f6f69fb
import { QuestionService } from './question.service';


@NgModule({
  declarations: [AddQuestionComponent, ViewQuestionComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers : [SubjectSerivce, QuestionService]
})
export class QuestionModule { }
