# Change Detection:
 - Change Detection is an important mechanism and responsible for keeping the UI in sync with the application's data model.
 - Angular Change detection mechanism automatically checks for the updates and re-renders the view if necessary.

 ## Zone.js
 - Zone.js is a library which is maintained by Angular and its team.
 - Zone.js does not analyze the code and determine whether this particular code will or will not have any effect on any data or 
   component.
 - NgZone injector and zone.runOutsideAngular() method in any method to skip that part of method inside it from change detection. This 
   concept is Known as "avoiding zone pollution".

 ## OnPush Strategy
 - It is basically an opt-in strategy - which means we can enable it on the component, to make sure that the change detection 
   runs less often for that component.
 - By default when an application loads, all components will load and change detection happens- to skip any component from change detection you can do it by " ChangeDetectionStrategy.Onpush ". It is efficient.
 - It tells angular to run change detection when 
  1. @Input() value changes
  2. event updates local state.
  3. Manual change detetced inside the component.
  4. Signal Changes.
 - It will not detect changes inside sub-component tree.
 - it reduces unnecessary re-renders and improves performance.
 - OnPush works effectively by using signals.

 ## Manual Change Detection - RxJS Subjects
 - Angular provides tools that allow to trigger change detection, manually.
 - ChangeDetectorRef is basically a service that gives manual control over Change detection.
 - Angular automatically updates the view when the data changes, but with the onPush strategy or performance optimizations, Angular might 
  skip the checks.
 - With Change Detector Ref, we can force angular to check and update component view.
 - Change Detection Ref only works in components not in services.
 - Change Detection Ref will watch for the manual changes - but we still need to emit an event - for that to happen.
 - Because, if the data comes from a service , we need a reliable way to notify components when the data changes.
  How will we trigger an event ?
  - By using a utility called BehaviorSubject from the RxJS library. It is placed inside service and subscribe for that variable
  ( e.g msg$ ) in the component file ngOnInit using changeDetectionRef with markForChange() method
  - Behaviour Subject with Async pipe is effective and optimized for manual change detection. There is no need of ChangeDetectionRef also. As we know async pipe handles subscription and unsubscription automatically.

  ## Zoneless Change detection:
  - In Package lock json file - remove zone js fron polyfills inside build.
  - providingExperimentalZonelessChangeDetection - By providing or importing this function app.config we can make the application completely zoneless. That is removing Zone.js from the change detection process. 




 