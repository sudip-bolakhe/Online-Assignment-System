import { Component, OnInit } from '@angular/core';
import { SubjectModel } from '../../subject/subject.model';
import { SubjectSerivce } from '../../subject/subject.service';
import { QuestionModel } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  question: QuestionModel;
  subjects: Array<SubjectModel>;

<<<<<<< HEAD
  constructor(private subjectService:SubjectSerivce
    , private questionService: QuestionService) { 
=======
  constructor(private subjectService: SubjectSerivce, private questionService: QuestionService) {
>>>>>>> 557233ebf6ea2aea1e99a37900beca0f4f6f69fb
    this.question = new QuestionModel();
    this.question.subject = new SubjectModel();

  }
  grades: Array<String>;
  faculty: Array<String>;


  ngOnInit() {
    this.grades = ["11", "12"];
    this.faculty = ["Science", " Management"];
  }

  getSubject(grade, faculty) {
    this.subjectService.getSubjects(grade, faculty).subscribe(
      data => {
        this.subjects = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.subjects);
      }, error => {

      }
    );
  }

<<<<<<< HEAD
  changeSubject(event: any){
      this.getSubject(this.question.subject.grade,this.question.subject.faculty);
  }
  addQuestion(){
      this.questionService.addQuestion(this.question).subscribe(
        data =>{

        },
        error =>{

        }
      );
=======
  changeSubject(event: any) {
    console.log(" reached");
    this.getSubject(this.question.subject.grade, this.question.subject.faculty);
  }

  addQuestion(question: QuestionModel) {
    this.questionService.addQuestion(question);
>>>>>>> 557233ebf6ea2aea1e99a37900beca0f4f6f69fb
  }
}
