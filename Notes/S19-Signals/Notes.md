# Signals:
  - Inspired from solid.js
  - It follows push pull pattern where push allows you to set new values or mutate the original value and pull allow you to retrieve those
    values. 
  - The Signals provide an alternative way to manage the state changes inside the application.
  - Without signals, Angular performs the change detection cycle automatically for every component. which can impact performance of the 
    application.
  - Signals are primitive reactive system in Angular.
  - A signal will always have an initial value and cannot be left empty.
  - It notifies the consumer when the value changes.

  - A ***writable*** signal is a signal which allows direct update of their values. It is default signal behaviour.
  - Any writable signal can be updated by using set() and update() methods.
  - update() method takes callback function as input. whch takes current value and returns new value.

    e.g: count = signal<number>(0)  or count = signal(0)

  ## computed Signals:
  - Computed signals are the signals that are dependent on other or previous signals.
  - The computed signals derives its value from other signals. 
  - These are not writable signals ( directly we cannot assign values). Only read-only signals.
  - update() and set() methods wont work.

  ## effect() function:
  - effect() function is used for carrying out any side operations when the value of signal changes.
  - The effect() function is executed side effects such as 
    - logging to console.
    - Making an HTTP request.
    - updating the DOM.
   ### onCleanup() - cleaning the effect() function.
    - The purpose of the onCleanup() is used to register a callback that will be executed when an effect is re-triggered or destroyed.

  ## Untracking() Signals:
  - The untracking of the signal values is carried out by the untracked() function.
  - It prevents Angular to track or read the signal value.
  - Untracked signals can be used anywhere where we need to avoid unnecessary re-evaluations.

  ## Linked() Signals:
  - Angular introduces a new feature called linkedSignal() which is used to link a signal with another signal.
  - A linked signal resets its value based on changes in its source signal but can also be manually changed.
  - So it is more like a combination of a simple signal and a computed signal.
  - It can be writeable signal but writeable wont work for linked signal.
  - The linkedSignals() feature combines the reactive nature of computed() with the flexibility of writable signals,
    allowing both automaic updates based on source signals and manual overrides.

  ## Observable to Signal:
  - The toSignal() function is very handy when we want to maintain the reactive state of the component with signals,
  while using the observable as a source data.
