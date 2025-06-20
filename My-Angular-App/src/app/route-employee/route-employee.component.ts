import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-route-employee',
  imports: [
    // RouterLink
  ],
  templateUrl: './route-employee.component.html',
  styleUrl: './route-employee.component.css',
})
export class RouteEmployeeComponent {
  // Activated Route:

  // id: string = '';
  // name: string = '';
  // constructor(private route: ActivatedRoute) {
  //   // Will get access to all the properties and services that ActivatedRoute provides.
  //   //It is also called dependency injection- as we are injecting the services of Activatated route in our component.
  //   const params = this.route.snapshot.params;
  //   this.id = params['id'];  //route parameters only snapshop values and they are in string format. Can only assigned to strings.
  //   this.name = params['name'];
  // }

  // Query parameters:
  id: string = '';
  name: string = '';
  Employees = [
    { Id: 101, name: 'userA' },
    { Id: 102, name: 'userB' },
    { Id: 103, name: 'userC' },
    { Id: 104, name: 'userD' },
    { Id: 105, name: 'userE' },
  ];

  // constructor(private route: ActivatedRoute) {
  //   this.route.queryParams.subscribe((params)=>{
  //     this.id=params['id'];
  //     this.name=params['name'];
  //     console.log(params);
  //   })
  // }

  constructor(private router: Router) {}

  navigateToEmpoyeeDetails(empId: number, empName: string) {
    this.router.navigate(['./employee-detail'], {
      queryParams: { id: empId, name: empName },
    });
  }
}
