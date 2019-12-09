import { Component, OnInit } from '@angular/core';
import { QuestionModel } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {


  questions: Array<QuestionModel>;

  constructor(private questionService: QuestionService) {

  }
  ngOnInit() {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questionService.getAll().subscribe(
      data => {
        this.questions = JSON.parse(JSON.parse(JSON.stringify(data))._body);
      }, error => {

      }
    );
  }

}
