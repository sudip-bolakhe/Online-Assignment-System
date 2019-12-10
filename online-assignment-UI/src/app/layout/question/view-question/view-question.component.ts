import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionModel } from '../question.model';
import { QuestionService } from '../question.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {


  questions: Array<QuestionModel>;

  rows: Array<QuestionModel> = [];
 
  @ViewChild(DatatableComponent,null) table: DatatableComponent;
  constructor(private questionService: QuestionService) {

  }
  ngOnInit() {
    this.getQuestionByTeacherId();
  }

  getQuestionByTeacherId() {
    const teacherId = localStorage.getItem('id');
    this.questionService.getByTeacherId(teacherId).subscribe(
      data => {
        this.questions = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.rows = this.questions;
      }, error => {
          
      }
    );
  }

}
