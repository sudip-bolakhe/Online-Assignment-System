import { TeacherModel } from '../teacher/teacher.model';

export class StudentModel{
    public id:String;
    public faculty:String;
    public subject:String;
    public teacher:TeacherModel;
    public deadLine:String;
} 