import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FundamentalsComponent } from "./fundamentals/fundamentals.component";
import { Fundamentals2Component } from "./fundamentals-2/fundamentals-2.component";

@Component({
  selector: 'app-root',
  imports: [
    // FundamentalsComponent, 
    Fundamentals2Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-Angular-App';
}
