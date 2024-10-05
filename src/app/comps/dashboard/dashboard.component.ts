import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PdfService } from 'src/app/pdf.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/user.service';
import { Employee } from 'src/entity/Employee';
import { User } from 'src/entity/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  userEmail: string | null = '';
  userRole: string | null = '';
  employees: any[] = []; // To hold all employees
  currentEmployee: any = {}; // To hold current employee's data
  isAdmin: boolean = false;
  isCurrentEmployee: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private userService: UserService,
    private pdfService: PdfService,
    private router:Router
  ) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userEmail = user.username || null; // Assuming user object has an email property
    this.userRole = user.role || null; // Assuming user object has a role property

    // Determine if the user is admin or the current employee
    this.isAdmin = this.userRole === 'Admin';
    this.isCurrentEmployee = this.userRole === 'Employee';
  }

  downloadPdf() {
    this.pdfService.generatePdf(this.employees);
  }
  ngOnInit() {
    // Fetch all employees if admin
    if (this.isAdmin) {
      this.employeeService.getAllEmployees().subscribe((data) => {
        this.employees = data; // Store the list of all employees
      });
    } else if (this.isCurrentEmployee) {
      // Fetch current employee details
      const currentUserId = JSON.parse(
        localStorage.getItem('user') || '{}'
      ).uid; // Assuming uid is stored
      this.employeeService.getEmployeeById(currentUserId).subscribe((data) => {
        this.currentEmployee = data; // Store the current employee's data
      });
    }
  }
  selectID: any=0;
  onDelete(employee: Employee) {
    this.selectID= employee.eid;
   
     this.employeeService.deleteEmployee(this.selectID).subscribe({
      next:(response)=>{
        console.log("Employee deleted..",response);
        this.router.navigate(['/dashboard'])
      },
      error: (error)=>{
        console.error("error deleting employee...",error)
      },
    } )
  }

 

  
  // userEmail: string | null = '';
  // userRole: string | null = '';
  // isAdmin: boolean = false;
  // isCurrentEmployee: boolean = false;
  // user: User = {
  //   username: '',
  //   password: '',
  //   role: '',
  // };
  // constructor() {
  //   this.user = JSON.parse(localStorage.getItem('user') || '{}');
  //   this.userEmail = this.user.username || null;
  //   this.userRole = this.user.role || null;

  //   // Determine if the user is admin or the current employee
  //   this.isAdmin = this.userRole === 'Admin';
  //   this.isCurrentEmployee = this.userRole === 'Employee';
  // }
}
