import { TeacherModel } from '../teacher/teacher.model';
import { SubjectModel } from '../subject/subject.model';

export class QuestionModel{
    public id:String;
    public subject:SubjectModel;
    public teacher:TeacherModel;
    public deadLine:String;
<<<<<<< HEAD
    public name:String;
=======
    public question:String;
>>>>>>> 557233ebf6ea2aea1e99a37900beca0f4f6f69fb
} 