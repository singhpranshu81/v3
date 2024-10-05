import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private empApiUrl = 'http://localhost:8082/sprbootdemo/semployee';
 
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
   };
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.empApiUrl}/listallemp`);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`${this.empApiUrl}/findemp/${id}`);
  }

  createEmployee(employee: any): Observable<any> {
    return this.http.post(`${this.empApiUrl}/addempl`, employee,this.httpOptions);
  }

  updateEmployee(employee: any): Observable<any> {
    return this.http.put(`${this.empApiUrl}/updateemp`, employee,this.httpOptions);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.empApiUrl}/deleteemp/${id}`);
  }

  getNextEmployeeId(): Observable<Number> {
    return this.http.get<Number>(`${this.empApiUrl}/next-eid`);
  }
}
