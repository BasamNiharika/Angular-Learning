import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-methods',
  imports: [CommonModule],
  templateUrl: './methods.component.html',
  styleUrl: './methods.component.css',
})
export class MethodsComponent {
  // Making Http  calls with HttpClient
  // responseData: any;
  // loadData: boolean = false;
  // constructor(private http: HttpClient) {}

  // getData() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((data) => {
  //       this.responseData = data;
  //       this.loadData = true;
  //       console.log(data);
  //     });
  // }

  // Making Http  calls with Observable
  responseData$?: Observable<any>;
  loadData: boolean = false;
  constructor(private http: HttpClient) {}

  getData() {
    this.responseData$ = this.http.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.loadData = true;
  }

  postdata() {
    const user = {
      id: 101,
      email: 'usera@gnmail.com',
    };
    this.http
    .post('https://jsonplaceholder.typicode.com/users', user);
  }

  putData() {
    const user = {
      id: 105,
      email: 'newUser@gmail.com',
    };
    this.http
      .put('https://jsonplaceholder.typicode.com/users/'+ user.id, user)
      .subscribe((res) => console.log('updated res', res));
  }
}
