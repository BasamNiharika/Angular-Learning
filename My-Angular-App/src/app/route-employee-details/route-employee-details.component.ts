import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-employee-details',
  imports: [],
  templateUrl: './route-employee-details.component.html',
  styleUrl: './route-employee-details.component.css'
})
export class RouteEmployeeDetailsComponent {
  id:string='';
  name:string='';
   constructor(private route: ActivatedRoute, private router:Router) {
    this.route.queryParams.subscribe((params)=>{
      this.id=params['id'];
      this.name=params['name'];
      console.log(params);
    });
  }

  naviagetBackToEmployee(){
    this.router.navigate(['./employee']);
  }
}
