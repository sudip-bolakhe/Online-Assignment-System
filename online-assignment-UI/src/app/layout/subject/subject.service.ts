import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SubjectSerivce{
    subjectUrl : string ="http://localhost:8080/subjects";
  constructor(private http: Http) { }

  getSubjects(grade, faculty) {
    return this.http.get(this.subjectUrl +"/grade/" + grade + "?faculty=" + faculty);
  }
}