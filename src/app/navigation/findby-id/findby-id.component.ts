import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/entity/Employee';

@Component({
  selector: 'app-findby-id',
  templateUrl: './findby-id.component.html',
  styleUrls: ['./findby-id.component.css']
})
export class FindbyIdComponent {
  employees: Employee[] = [];
  searchId: any;

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
