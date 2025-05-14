import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FundamentalsComponent } from "./fundamentals/fundamentals.component";
import { Fundamentals2Component } from "./fundamentals-2/fundamentals-2.component";
import { DirectivesComponent } from "./directives/directives.component";
import { Directives2Component } from "./directives-2/directives-2.component";

@Component({
  selector: 'app-root',
  imports: [
    // FundamentalsComponent, 
    // Fundamentals2Component,
    // DirectivesComponent
    Directives2Component
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-Angular-App';
}
