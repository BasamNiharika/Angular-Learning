import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  concatMap,
  EMPTY,
  filter,
  from,
  interval,
  map,
  mergeMap,
  of,
  switchMap,
  take,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-operators',
  imports: [CommonModule],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css',
})
export class OperatorsComponent implements OnInit {
  // of() operator
  // constructor() {
  //   const value$ = of(1, 2, 3, 4, 5);
  //   value$.subscribe((val) => console.log(val));

  //   const arr$ = of([1, 2, 3, 4, 5]);
  //   arr$.subscribe((val) => console.log(val));

  //   const obs$ = of({ name: 'hii', age: 28 }, [1, 2, 3, 4], () => 'Hello');
  //   obs$.subscribe((val) => console.log(val));
  // }

  //  from() operator
  // constructor(){
  //   const arr$ = from([1,2,3,4]);
  //   arr$.subscribe((val)=>console.log(val));

  //   const promise$ = from (new Promise((resolve)=> resolve('Promise resolved')));
  //   promise$.subscribe((val)=>console.log(val));

  //   const m = new Map();
  //   m.set(1,'hello');
  //   m.set(2,'Converting map to observable');

  //   const mapObs$=from(m);
  //   mapObs$.subscribe((val)=>console.log(val));

  // }

  // interval() function
  // ngOnInit(): void {
  //   const obs$ =interval(1000);
  //   const obsVar= obs$.subscribe((val)=>console.log(val));
  //    setTimeout(()=>{
  //     console.log('unsubcribed');
  //     obsVar.unsubscribe();
  //    },5000);
  // }

  // ngOnInit(): void {
  //   const timeobs$= timer(5000,1000); // after 5 seconds first value emits, then continues to emit after every 1 second
  //   const obsVar=timeobs$.subscribe((val)=>console.log(val));

  //   setTimeout(()=>{
  //     console.log('unsubcribed');
  //     obsVar.unsubscribe();
  //    },10000)
  // }

  // Task - loading Spinner
  // fetchData: string ='';
  // isLoading: boolean =true;

  // ngOnInit(): void {
  //   timer(3000).subscribe(()=>{
  //     this.isLoading = false;
  //     this.fetchData = 'Timer function Executed...';
  //   })
  // }

  // EMPTY Operator
  // ngOnInit(): void {
  //   EMPTY.subscribe({
  //     next: (VALUE) => console.log('VALUE'),
  //     complete: () => console.log('complete'),
  //   });
  //   const src1 = of(1, 2, 3);
  //   const src2 = EMPTY;

  //   src1.subscribe({
  //     next: (value) => console.log(`value: ${value}`),
  //     complete: () => console.log('completed'),
  //   });
  //   src2.subscribe({
  //     next: (value) => console.log(`value: ${value}`),
  //     complete: () => console.log('completed empty'),
  //   });
  // }

  // map operator
  // ngOnInit(): void {
  //   const obs$ = of(1,2,3,4,5,6);
  //   const newObs$ = obs$.pipe(map((num)=> num*2),map((num)=> num*3));
  //   newObs$.subscribe((val)=> console.log(val));

  //   const strobs$ = of('NewYork', 'Berlin','London');
  //   const new2Obs$ = strobs$.pipe(map((str)=> str.toUpperCase()),map((str)=>str.toLowerCase()));
  //   new2Obs$.subscribe((val)=> console.log(val));
  // }

  // filter operator
  // ngOnInit(): void {
  //   const numArr$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  //   const even$ = numArr$.pipe(filter((val) => val % 2 == 0));
  //   const odd$ = numArr$.pipe(filter((val) => val % 2 != 0));

  //   console.log('Even numbers');
  //   even$.subscribe((val)=> console.log(val));
  //   console.log('Odd numbers');
  //   odd$.subscribe((val)=> console.log(val));
  // }

  // mergeMap() operator: - will not maintain order
  // outerObs$ = from([1, 2, 3, 4, 5]);
  // innerObs$ = (value: number) => of(value * 2);

  // flattenObs$ = this.outerObs$.pipe(mergeMap(this.innerObs$));
  // ngOnInit(): void {
  //   this.flattenObs$.subscribe((res)=>console.log(res));
  // }

  // concatMap() operator - will maintain order
  // srcObs$ = of(1, 2, 3);
  // innerObs$ = of('A', 'B', 'C');
  // ngOnInit(): void {
  //   this.srcObs$
  //     .pipe(
  //       concatMap((val) => {
  //         console.log('Source Val:', val);
  //         console.log('starting new Observable');
  //         return this.innerObs$;
  //       })
  //     )
  //     .subscribe((res) => console.log('Reading ' + res));
  // }

  // 
  srcObs$ = of(1, 2, 3);
  ngOnInit(): void {
    this.srcObs$
      .pipe(
        switchMap((val) => {
          console.log('Source Val:', val);
          console.log('starting new Observable');
          return interval(1000).pipe(take(3)) // here number 3 represents it should only take 3 values which were emitted by  observable.
        })
      )
      .subscribe((res) => console.log('Interval value ' + res));
  }
}
