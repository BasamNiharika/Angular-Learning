import { AbstractControl, ValidationErrors } from '@angular/forms';

export function convertToUpperCase(control:AbstractControl): ValidationErrors | null{
    const username: string =control.value as string;

    if(username !== username.toUpperCase()){
        control.setValue(username.toUpperCase());
    }
    return null;
}