# RxJS Operators:
- RxJS opertaors provides may operators for Observables.

## creation Operators:
  ### of() operator:
   - returns an observable.
   - The of() operator is used to create an observable sequence that emit a set of values in specified order and then completes.

  ### from() operator:
   - from() converts almost anything( array,object, promose,map() etc.) into an observable.
   Note: from() operator emits value one by one where as of() operator emits as set of values

  ### interval() operator:
  -  interval() function can be used with time-based operations.

  ### timer() operator:
  - The timer Operator provides a convenient way to handle time related behaviour.
   timer(dueTime, periodScheduler, asyncScheduler (optional) )

  ### EMPTY operator:
  - it is often used in situations to represent the absence of data or signal, the completion of the operation without emitting 
  any values or errors.
  - It only executes complete method.

## Pipeable Operators:
  - Pipe operators are kind of operators that can be piped to an observable using the pipe() function.
  - The pipe() function takes an observable as an input and returns a new observable as output without modifying the original Observable.
  - This is a just a better way to handle the observable to apply a series of operators on it.

  ### filter() operator:
   - The filter() operator is used for filtering the items emitted by the observable bsed on some condition.

  ### map() operator:
  - The map() operator is used for transforming the data emitted by an observable into a new form of value.

  ### mergeMap() operator:
  - mergeMap() is used for flattening the Nested Observables and that is why it is alson known as *flatMap*

  ### concatMap() operator:
  - The concat() operator concatenates two observables in a strict and sequential manner.
  - This will ensure that the subscribers will receive the data in the order in which the observables are subscribed.
  - The outer observable emits value only after completion of inner observable completes its emitting values.

  ### switchMap() operator:
  - But in SwitchMap() operator, when the source(outer) observable emits a new value the swicthMap operator cancels the function of 
    the inner Observable and starts with a new one.
  - the switch map is used to cancel ongoing requests and initiate a new one with the latest input. 