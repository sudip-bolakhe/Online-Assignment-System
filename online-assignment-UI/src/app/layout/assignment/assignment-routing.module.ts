import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAssignmentComponent } from './view-assignment/view-assignment.component';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';


const routes: Routes = [
{path:'list', component: ViewAssignmentComponent},
{path:'submit', component: SubmitAssignmentComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }
