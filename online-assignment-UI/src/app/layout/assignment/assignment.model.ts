import { QuestionModule } from '../question/question.module';
import { QuestionModel } from '../question/question.model';
import { StudentModel } from '../student/student.model';

export class AssignmentModel{
    public answer: string;
    public question: QuestionModel;
    public  student: StudentModel;
}