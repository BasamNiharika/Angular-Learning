import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const auth=inject(AuthService)
  const router=inject(Router)

  console.log('auth',auth.isLoggedInUser())
  if(auth.isLoggedInUser()){
    return true;
  }else{
    router.navigate(['/login'])
  }

  return true;
};
