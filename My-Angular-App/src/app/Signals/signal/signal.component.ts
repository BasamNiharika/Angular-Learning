import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  linkedSignal,
  OnInit,
  signal,
  untracked,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, map, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Item } from './item.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signal',
  imports: [CommonModule, FormsModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  // count = signal<number>(0);

  // incrementCounter() {
  //   this.count.set(this.count() + 1);
  //   console.log('count value: ', this.count());
  // }

  // cart = signal({
  //   name: 'niharika',
  //   email: 'niharika@gmail.com',
  // });

  // ngOnInit(): void {
  //   console.log('previous Cart', this.cart());
  //   this.cart.update((cartDetails) => ({
  //     ...cartDetails,
  //     qty: 3,
  //     name: 'niha',
  //   }));
  //   console.log('updated cart',this.cart);
  // }

  // task: todo App

  // todoName: string = '';
  // todos: WritableSignal<string[]> = signal([]);

  // addTodo(todo: HTMLInputElement): void {
  //   const item = todo.value;
  //   this.todos.update((todos) => [...todos, item]);
  //   todo.value='';
  //   todo.focus();
  // }

  // removeTodo(index:number){
  //   this.todos.update((todos)=>[
  //     ...todos.slice(0,index),
  //     ...todos.slice(index+1)
  //   ]
  //   )
  // }

  // computed signals
  // arr = signal([1, 2, 3, 4]);
  // sumArr = computed(() => this.arr().reduce((sum, i) => sum + i));

  // count = signal(20);
  // remainingCount = computed(() => 100 - this.count());

  // constructor(){
  //   effect(()=>{
  //     console.log(`Count Value: ${this.count()} \n Remaining count: ${this.remainingCount()}`)
  //   })
  // }

  // modifyArr() {
  //   this.arr.update((val) => [...val, 10]);
  // }

  // untracking() Signals
  // counter1 = signal(0);
  // counter2 = signal(0);

  // updateCounter = effect(() => {
  //   console.log(
  //     `Counter1: ${this.counter1()} \n Counter2:${untracked(() =>
  //       this.counter2()
  //     )}`
  //   );
  // });

  // updateCounter1() {
  //   this.counter1.update(() => this.counter1() + 1);
  // }
  // updateCounter2() {
  //   this.counter2.update(() => this.counter2() + 1);
  // }

  // linked signals
  // value = signal(20);
  // // linkedValue = linkedSignal(()=> this.value()*2); or
  // linkedValue = linkedSignal({
  //   source: this.value,
  //   computation: () => this.value() * 2,
  // });

  // constructor() {
  //   this.linkedValue.set(30); //which is not possible with computed signal throw error
  // }

  // Observable to signal
  // observable$ = interval(1000).pipe(
  //   map(() => Math.floor(Math.random() * 100).toString()),
  //   take(5)
  // );

  // randomNumber = toSignal(this.observable$, { initialValue: 'Loading...' });

  // constructor() {
  //   effect(() => {
  //     console.log('Random Number: ', this.randomNumber());
  //   });
  // }

  // Task- Filtering Products based on user input with linked signals()
  allItems = signal<Item[]>([]);
  categories = signal<string[]>([]);
  selectedCatergory = signal('');
  searchQuery = signal('');

  constructor(private http: HttpClient) {
    this.fetchItems();
  }

  fetchItems() {
    const apiUrl = 'https://dummyjson.com/products';
    this.http.get<{ products: Item[] }>(apiUrl).subscribe({
      next: (res) => {
        const items = res.products;
        this.allItems.set(items);

        const categories: string[] = [
          ...new Set(items.map((item) => item.category)),
        ];
        this.categories.set(categories);
      },
      error: (err) => console.log('Error', err),
    });
  }

  fetchedItems = linkedSignal({
    source: this.allItems,
    computation: () => {
      const items = this.allItems();
      const category = this.selectedCatergory();
      const query = this.searchQuery();
      return items.filter(
        (item) =>
          category === '' ||
          (item.category === category &&
            item.title.toLowerCase().includes(query.toLowerCase()))
      );
    },
  });

  updateCategory(event: Event) {
    const category = (event.target as HTMLSelectElement).value;
    this.selectedCatergory.set(category);
  }

  updateSearchQuery(event:Event){
    const query = (event.target as HTMLInputElement).value;
    this.searchQuery.set(query);
  }
}
