import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { StudentModel } from '../student.model';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  prductModels: Array<StudentModel>;
  temp = [];
  rows: Array<StudentModel> = [];
  columns = [

    { prop: 'firstName' },
    { prop: 'lastName' },
    { prop: 'class' },
    { prop: 'rollNo' }

  ];
  @ViewChild(DatatableComponent,null) table: DatatableComponent;
  //constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getAllProduct();
  }
  getAllProduct() {
    // this.productService.getAllProduct().subscribe(
    //   data => {
    //     this.prductModels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
    //     this.rows = this.prductModels;
    //     this.temp = [...this.prductModels];
    //   },
    //   error => {

    //   }
    // );
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.firstName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  deleteProduct(id) {
  //   this.productService.deleteProduct(id).subscribe(
  //     data => {
  //       this.getAllProduct();
  //     }
  //   );
  // }

}
}
