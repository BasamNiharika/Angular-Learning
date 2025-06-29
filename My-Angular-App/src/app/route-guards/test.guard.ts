import { CanActivateFn } from '@angular/router';

export const testGuard: CanActivateFn = (route, state) => {
  return true; // if it is true we can access "admin" route
  // return false; // if it is false we cannot access "admin" route

};
