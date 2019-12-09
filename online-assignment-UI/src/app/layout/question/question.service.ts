import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QuestionService{
 http: Http;
    questionUrl = "localhost:8080/questions/add";
    addQuestion(question) {
        return this.http.post(this.questionUrl,question);
    }
}