import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-angular-routing',
  imports: [RouterModule ,
    RouterLink
  ],
  templateUrl: './angular-routing.component.html',
  styleUrl: './angular-routing.component.css'
})
export class AngularRoutingComponent {
  //refer app.routes

  // http://localhost:4200/route 

  employees=[
    { empId:101, empName: 'empA',empDept: "Digital"},
    { empId:102, empName: 'empB',empDept: "RPA"},
    { empId:103, empName: 'empC',empDept: "CG"},
    { empId:104, empName: 'empD',empDept: "IT"}
  ]
}
