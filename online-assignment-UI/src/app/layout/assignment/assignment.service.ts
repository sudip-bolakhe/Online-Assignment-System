import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class AssignmentService{
    assignmentUrl = "localhost:8080/answers"

    constructor(private http:Http){}

    submitAssignment(assignment){
        this.http.post(this.assignmentUrl, assignment);
    }

    
}