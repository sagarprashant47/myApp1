import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'properName'
})
export class ProperNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let [firstName,lastName]  = value.split(' ');
    firstName = firstName.charAt(0).toLocaleUpperCase()+firstName.substr(1,firstName.length-1);
    lastName = lastName.charAt(0).toLocaleUpperCase()+lastName.substr(1,lastName.length-1);
    return `${firstName} ${lastName}`;
  }

}
