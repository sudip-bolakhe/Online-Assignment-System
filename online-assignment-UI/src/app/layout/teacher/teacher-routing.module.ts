import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'list', component: ViewTeacherComponent },
    {path: 'add', component: AddTeacherComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeacherRoutingModule{
}