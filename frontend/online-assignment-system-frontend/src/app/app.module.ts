import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { StudentFeedbackComponent } from './students/student-list/student-feedback/student-feedback.component';
import { TeacherEditComponent } from './teacher-list/teacher-edit/teacher-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    StudentListComponent,
    StudentDetailComponent,
    TeacherListComponent,
    StudentFeedbackComponent,
    TeacherEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
