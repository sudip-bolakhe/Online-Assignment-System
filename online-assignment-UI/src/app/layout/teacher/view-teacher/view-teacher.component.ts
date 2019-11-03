import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherModel } from '../teacher.model';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.scss']
})
export class ViewTeacherComponent implements OnInit {

  rows: Array<TeacherModel> = [];
  columns = [

    { prop: 'firstName' },
    { prop: 'lastName' },
    { prop: 'subject' }

  ];
  @ViewChild(DatatableComponent,null) table: DatatableComponent;
  constructor() { }

  ngOnInit() {
  }

}
