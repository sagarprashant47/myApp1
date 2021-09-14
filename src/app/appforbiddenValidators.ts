import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddennameBValidators(regex : RegExp) : ValidatorFn{
    let forBidden : boolean = false;
    return (control : AbstractControl) : ValidationErrors| null =>{
        forBidden = regex.test(control.value);
        return forBidden ? {forbiddenName: {value: control.value}} : null; 
    }
}