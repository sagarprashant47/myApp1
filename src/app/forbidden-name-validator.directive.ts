import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { forbiddennameBValidators } from './appforbiddenValidators';

@Directive({
  selector: '[appForbiddenNameValidator]',
  providers: [{provide: NG_VALIDATORS , useExisting : forbiddennameBValidators, multi: true}]
})
export class ForbiddenNameValidatorDirective {
 @Input() appForbiddenNameValidator='';
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.appForbiddenNameValidator ? forbiddennameBValidators(new RegExp(this.appForbiddenNameValidator))(control):null;
  }

}
