import { CanDeactivateFn } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const formGuardGuard: CanDeactivateFn<LoginComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  // console.log(component);
  // console.log(component.myform.dirty);
  // if (component.myform?.dirty) {
  //   return confirm('Your changes are unsaved! Are you sure want to leave ?')
  //     ? true
  //     : false;
  // }
  // console.log(currentRoute);
  // console.log(currentState);
  // console.log(nextState);
  return true;
};
