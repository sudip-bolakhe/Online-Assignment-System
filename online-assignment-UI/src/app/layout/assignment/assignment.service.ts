import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class AssignmentService{
    assignmentUrl = "http://localhost:8080/answers"

    constructor(private http:Http){}

    submitAssignment(assignment){
        return this.http.post(this.assignmentUrl + "/save", assignment);
    }

    
}