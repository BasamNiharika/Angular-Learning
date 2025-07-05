import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { response } from 'express';
import { resolve } from 'path';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
})
export class ObservableComponent {
  /* constructor() {
    const observable = new Observable((observer) => {
      // console.log('Observable executed..');
      observer.next('Hello');
      // observer.error('An error Occured');
      observer.complete();
    }).subscribe({
      next(value) {
        console.log('Received value:', value);
      },
      // error(err){
      //   console.error('Error',err);
      // },
      complete(){
        console.log('Observable completed..')
      }
    });
    //observable emits value using next() method which can be accessed by subscrubing to it.
  }  */

  // Subscribing
  /*
  observable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
      console.log('-- After two seconds --');
      observer.next(4);
      observer.complete();
    }, 2000);
  });

  constructor() {
    console.log('Before Subcribe');
    this.observable.subscribe({
      next(x) {
        console.log('value:', x);
      },
      error(e) {
        console.error('Error', e);
      },
      complete() {
        console.log('Observable executed successfully');
      },
    });
    console.log('After Subcribe');
  }*/

  // Unsubscribing
  /*  observable = new Observable<number>((observer) => {
    let count = 0;
    const interval = setInterval(() => {
      observer.next(count++);
    },1000);
    return () => {
      clearInterval(interval);  // emission is stopped
      console.log('Interval Cleared');
    }
  });

  constructor() {
    const obs = this.observable.subscribe((data) => {
      console.log('Data', data);
    });

    setTimeout(() => {
      obs.unsubscribe(); // observable will stop execution
      console.log('Observable unsubscribed');
    }, 5000);
  }*/

  //Async Pipe
  // value$:Observable<number>;

  // constructor(){
  //   this.value$=new Observable((observer)=>{
  //     setTimeout(()=>{
  //       observer.next(1);
  //       observer.next(2);
  //       observer.next(3);
  //       observer.next(4);
  //       observer.complete();
  //     },2000)
  //   })
  // }

  // for Arrays
  // value$:Observable<number[]>;

  // constructor(){
  //   this.value$=new Observable((observer)=>{
  //     setTimeout(()=>{
  //       observer.next([1,2,3,4,5]);
  //       observer.complete();
  //     },1000)
  //   })
  // }

  // for promises
  // resolvePromise$:Promise<string>;

  // constructor(){
  //   this.resolvePromise$=new Promise((resolve)=>{
  //     setTimeout(()=>{
  //       resolve('Promise executed!!');
  //     },2000);
  //   })
  // }

  //Task- Fetching JSON WITH Async Pipe
  // jsonData$: Observable<any> | undefined;
  // constructor(){
  //   this.fetchData();
  // }

  // fetchData() {
  //   this.jsonData$ = new Observable<any>((observer) => {
  //     fetch('https://dummyjson.com/products/category-list')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         observer.next(data);
  //         observer.complete();
  //       })
  //       .catch((err) => observer.error(err));
  //   });
  // }

  // Hot and Cold Observables examples:

  // coldObservable$= new Observable<number>((observer)=>{
  //   const randomNumber = Math.floor(Math.random()*90)+10;
  //   observer.next(randomNumber);
  //   observer.complete();
  // })

  // constructor(){
  //   this.coldObservable$.subscribe({
  //     next:(value)=>{
  //       console.log(`subscriber 1 ${value}`)
  //     }
  //   });
  //   this.coldObservable$.subscribe({
  //     next:(value)=>{
  //       console.log(`subscriber 2 ${value}`)
  //     }
  //   });
  // }


  randomNumber = Math.floor(Math.random()*90)+10;
  HotObservable$= new Observable<number>((observer)=>{
    observer.next(this.randomNumber);
    observer.complete();
  })

  constructor(){
    this.HotObservable$.subscribe({
      next:(value)=>{
        console.log(`subscriber 1 ${value}`)
      }
    });
    this.HotObservable$.subscribe({
      next:(value)=>{
        console.log(`subscriber 2 ${value}`)
      }
    });
  }
  
}
