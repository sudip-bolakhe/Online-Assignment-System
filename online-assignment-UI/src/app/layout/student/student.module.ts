import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { LayoutModule } from '../layout.module';
import { StudentRoutingModule } from './student-routing-module';

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    LayoutModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
