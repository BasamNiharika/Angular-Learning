import { Component } from '@angular/core';
import { AngularServiceService } from '../dependencies/angular-service.service';

@Component({
  selector: 'app-angular-service',
  imports: [],
  templateUrl: './angular-service.component.html',
  styleUrl: './angular-service.component.css',
})
export class AngularServiceComponent {
  employees: any = [];
  empId: number = 0;
  emp: any;

  constructor(private service: AngularServiceService) {
    this.employees=this.service.getEmployees();
    // console.log(this.employees);
  }

  showDetails(id: number) {
    this.empId=id;
    this.emp = this.service.getEmployeeById(id);
    // console.log(this.emp);
  }
}
