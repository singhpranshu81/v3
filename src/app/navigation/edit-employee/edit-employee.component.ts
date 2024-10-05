import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/entity/Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  employee: Employee = {
    eid: 0,
    ename: '',
    email: '',
    password: '',
    gender: '',
    dob: [],
    role: '',
    department: { deptId: 0, name: '' },
  };
  departments: any[] = []; // Assuming department data comes from the backend

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private aroute: ActivatedRoute,
    private router: Router
  ) {}
  public eid:any = this.aroute.snapshot.params['eid'];
       ngOnInit():void{
        this.employeeService.getEmployeeById(this.eid).subscribe(
          {
          next:  (data)=>{
            console.log(data);
            
            this.employee=data;},
          }
        )
     this.departmentService.getAllDepartments().subscribe(
          {
          next:  (data)=>{
            console.log(data);
            
            this.departments=data;},
           error: (error)=>{console.error("error.",error);
           }
          }
        )
       }
  updateEmployee() { 
console.log(this.employee);
this.employeeService.updateEmployee(this.employee).subscribe(
  {
    next: (data)=>{this.router.navigate(['/dashboard'])},
    error: (error)=>{console.error("error...",error);
    }
  }
)

  }
}
