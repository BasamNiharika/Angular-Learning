import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FundamentalsComponent } from "./fundamentals/fundamentals.component";
import { Fundamentals2Component } from "./fundamentals-2/fundamentals-2.component";
import { DirectivesComponent } from "./directives/directives.component";
import { Directives2Component } from "./directives-2/directives-2.component";
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";
import { ParentDecoratorComponent } from './parent-decorator/parent-decorator.component';
import { DecoratorAssignmentComponent } from "./decorator-assignment/decorator-assignment.component";
import { AngularPipesComponent } from "./angular-pipes/angular-pipes.component";
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

@Component({
  selector: 'app-root',
  imports: [
    // FundamentalsComponent, 
    // Fundamentals2Component,
    // DirectivesComponent
    // Directives2Component,
    // LifecycleHooksComponent,
    // ParentDecoratorComponent,
    // DecoratorAssignmentComponent,
    // AngularPipesComponent
    CustomPipesComponent
    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-Angular-App';
}
