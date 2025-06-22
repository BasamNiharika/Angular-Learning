import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AngularServiceService {
  private Employees = [
    {
      id: 1,
      name: 'Employee A',
      department: 'Admin',
      location: 'Hyderbad',
      phone: '12345678',
    },
    {
      id: 2,
      name: 'Employee B',
      department: 'IT',
      location: 'Indore',
      phone: '12345688',
    },
    {
      id: 3,
      name: 'Employee D',
      department: 'RPA',
      location: 'pune',
      phone: '12345677',
    },
    {
      id: 4,
      name: 'Employee C',
      department: 'Digital',
      location: 'Banglore',
      phone: '12345998',
    },
  ];

  constructor() {}

  getEmployees() {
    return this.Employees;
  }

  getEmployeeById(id: number) {
    return this.Employees.find((emp) => emp.id === id);
  }
}
