import { Component } from '@angular/core';
import { DemoCustomPipePipe } from '../demo-custom-pipe.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-pipes',
  imports: [FormsModule, DemoCustomPipePipe],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.css',
})
export class CustomPipesComponent {
  //sorting example
  numbers: number[] = [3, 1, 2, 4, 5];
  sortOrder: 'asc' | 'desc' = 'asc';
  showList: boolean = false;

  sorting() {
    this.showList = true;
  }

  //counting letters
  value: string = '';
}
