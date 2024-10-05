import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/entity/Employee';

@Pipe({
  name: 'findbyemail',
})
export class FindbyemailPipe implements PipeTransform {
  transform(employees: Employee[], email: string): Employee[] {
    if (!employees || !email) {
      return employees;
    }
    return employees.filter((employees) => {
     return employees.email.toLowerCase().includes(email.toLowerCase());
    });
  }
}
