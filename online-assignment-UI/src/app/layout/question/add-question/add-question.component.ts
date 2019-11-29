import { Component, OnInit } from '@angular/core';
import { SubjectModel } from '../../subject/subject.model';
import { SubjectSerivce } from '../../subject/subject.service';
import { QuestionModel } from '../question.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  question:QuestionModel;
  subjects:Array<SubjectModel>; 

  constructor(private subjectService:SubjectSerivce) { 
    this.question = new QuestionModel();
    this.question.subject = new SubjectModel();

  }
  grades:Array<String>;
  faculty:Array<String>;


  ngOnInit() {
   this.grades = ["11","12"];
   this.faculty = ["Science", " Management"];
  }

  getSubject(grade, faculty){
     this.subjectService.getSubjects(grade, faculty).subscribe(
      data =>{
        this.subjects = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.subjects);
      },error =>{

      }
    );
  }

  changeSubject(event: any){
    console.log(" reached");
      this.getSubject(this.question.subject.grade,this.question.subject.faculty);
  }
  setSubject(event){
    console.log(this.question.subject.name);
    console.log(this.question.subject);
  }
}
