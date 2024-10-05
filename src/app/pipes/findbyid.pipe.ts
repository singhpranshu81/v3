import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/entity/Employee';

@Pipe({
  name: 'findbyid'
})
export class FindbyidPipe implements PipeTransform {

  transform(employees: Employee[], eid: Number): Employee[] {
    if (!employees || !eid) {
      return employees;
    }
    return employees.filter((employees) => {
return employees.eid == eid;
    });
  }

}
