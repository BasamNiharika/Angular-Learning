import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FundamentalsComponent } from "./fundamentals/fundamentals.component";
import { Fundamentals2Component } from "./fundamentals-2/fundamentals-2.component";
import { DirectivesComponent } from "./directives/directives.component";
import { Directives2Component } from "./directives-2/directives-2.component";
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";
import { ParentDecoratorComponent } from './parent-decorator/parent-decorator.component';
import { DecoratorAssignmentComponent } from "./decorator-assignment/decorator-assignment.component";
import { AngularPipesComponent } from "./angular-pipes/angular-pipes.component";
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { AngularRoutingComponent } from "./angular-routing/angular-routing.component";
import { CommonModule } from '@angular/common';

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
    // CustomPipesComponent,
    // AngularRoutingComponent,
    // CommonModule
    RouterOutlet,
    // RouterLink
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-Angular-App';
}
