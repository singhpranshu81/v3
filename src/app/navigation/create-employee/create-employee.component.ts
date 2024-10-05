import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Department } from 'src/entity/Department';
import { Employee } from 'src/entity/Employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  @Input()
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
  departments: Department[] = [];

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private authService: AuthService,
    private router: Router
  ) {}

  maxDate: string | undefined;

  ngOnInit(): void {
    this.loadDepartments();
    this.getNextEmployeeId();
    console.log(this.getNextEmployeeId());
    this.maxDate = this.calculateMaxDate();
  }
  calculateMaxDate(): string {
    const today = new Date();
    
    const maxDate = new Date(today.setFullYear(today.getFullYear() - 20));
    return maxDate.toISOString().split('T')[0];
  }
  loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(
      (data) => {
        console.log(data);
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching departments', error);
      }
    );
  }
  getNextEmployeeId(): void {
    this.employeeService.getNextEmployeeId().subscribe({
      next: (id) => {
        console.log('Next Employee ID:', id);
        this.employee.eid = id; // Assign the fetched ID to the employee
      },
      error: (error) => {
        console.error('Error fetching next employee ID:', error);
      },
    });
  }
  updateDepartmentName(): void {
    // Convert to number if deptId is stored as a number
    const selectedDeptId = Number(this.employee.department.deptId);
    console.log('Selected Department ID:', selectedDeptId); // Log selected ID

    // Find the selected department
    const selectedDept = this.departments.find(
      (dept) => dept.deptId === selectedDeptId
    );
    console.log('Selected Department:', selectedDept); // Log selected department

    // Set the department name based on the selected department
    if (selectedDept) {
      this.employee.department.name = selectedDept.name;
    } else {
      this.employee.department.name = ''; // Reset name if no department found
    }
  }

  createEmployee() {
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (response) => {
        console.log('Employee created:', response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Error creating employee:', error);
      },
    });
  }
  
  
   goToDashboard(): void {
    this.router.navigate(['/dashboard']); // Navigate to the dashboard route
  }
}
