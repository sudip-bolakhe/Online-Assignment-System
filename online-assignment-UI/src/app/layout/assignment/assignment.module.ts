import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentRoutingModule } from './assignment-routing.module';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';
import { ViewAssignmentComponent } from './view-assignment/view-assignment.component';


@NgModule({
  declarations: [SubmitAssignmentComponent, ViewAssignmentComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule
  ]
})
export class AssignmentModule { }
