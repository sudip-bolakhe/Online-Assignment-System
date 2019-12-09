<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QuestionService{
 http: Http;
    questionUrl = "localhost:8080/questions/add";
    addQuestion(question) {
        return this.http.post(this.questionUrl,question);
    }
=======
import { Http } from '@angular/http';
import { QuestionModule } from './question.module';
import { QuestionModel } from './question.model';
import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService{
    questionUrl : string ="http://localhost:8080/questions";
  constructor(private http: Http) { }
  getAll() {
    return this.http.get(this.questionUrl + "/list");
  }

  addQuestion(question: QuestionModel) {
    return this.http.post(this.questionUrl +"/save",question);
  }
>>>>>>> 557233ebf6ea2aea1e99a37900beca0f4f6f69fb
}