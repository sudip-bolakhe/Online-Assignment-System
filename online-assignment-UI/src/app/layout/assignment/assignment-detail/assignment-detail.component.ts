import { Component, OnInit } from '@angular/core';
import { AssignmentModel } from '../assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../assignment.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss']
})
export class AssignmentDetailComponent implements OnInit {

  assignment : AssignmentModel = new AssignmentModel();
  student = false;
  
  constructor(private route: ActivatedRoute, private assignmentService: AssignmentService,
  private router:Router) {

    this.route.params.subscribe(
      params => {
        this.assignmentService.getById(params.id).subscribe(
          data => {
            this.assignment = JSON.parse(JSON.parse(JSON.stringify(data))._body);
  
          });
      }
    );
  }

  ngOnInit() {
    const  isStudent = localStorage.getItem('Role');
  if ( isStudent == "Student") {
    this.student = true;
  }
  }

}

