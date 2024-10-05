import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/entity/Employee';

@Component({
  selector: 'app-findby-email',
  templateUrl: './findby-email.component.html',
  styleUrls: ['./findby-email.component.css']
})
export class FindbyEmailComponent {
  employees: Employee[] = [];
  searchEmail: string = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.employees = data;
    });
  }
}
