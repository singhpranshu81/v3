import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import autoTable from 'jspdf-autotable';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class PdfService {
  
  generatePdf(employees: any) {
    const doc = new jsPDF();
    //1
    // console.log(employees)
    //  const emp= JSON.stringify(employees)
    const employeeData = employees.map((employees: { eid: any; ename: any; email: any; password: any; role: any; department: any; }) => [
      employees.eid,
      employees.ename,
      employees.email,
      employees.password,
      employees.role,
      employees.department.name
    ]);
   
    //3
  //  autoTable(doc, { html: '#my-table' })
    autoTable(doc, {
      head: [['ID', 'Name', 'Email', 'Password', 'Role', 'Department']],
      body: employeeData,
    });

    //2
    // let ypos = 20;
    // employees.forEach(
    //   (emp: {
    //     ename: any;
    //     eid: any;
    //     email: any;
    //     role: any;
    //     department: any;
    //   }) => {
    //     doc.text(
    //       `ID: ${emp.eid} Name: ${emp.ename} Email: ${emp.email} Role: ${emp.role} Dept: ${emp.department.name}`,
    //       10,
    //       ypos
    //     );
    //     ypos += 10;
    //   }
    // );
    // let ypos=20;
    // employees.forEach(
    //   (emp: {
    //     ename: any;
    //     eid: any;
    //     email: any;
    //     role: any;
    //     department: any;
    //   }) => {
    //     doc.text(
    //       `ID: ${emp.eid} Name: ${emp.ename} Email: ${emp.email} Role: ${emp.role} Dept: ${emp.department.name}`,
    //       10,
    //       ypos
    //     );
    //     ypos += 10;
    //   }
    // );
    //1
    // const name= employees[0].ename;
    // console.log(name)
    // doc.text(`Employee Details ${name}`, 10, 10);
    // var splitTitle = doc.splitTextToSize(emp, 180);
    // doc.text( splitTitle,15, 20);
    //  doc.text(`${emp}`, 10, 20);
    // doc.text(`Name: ${employees.ename}`, 10, 20);
    // doc.text(`Email: ${employees.email}`, 10, 20);
    // doc.text(`Role: ${employees.role}`, 10, 20);
    // doc.text(`Department: ${employees.department.name}`, 10, 20);
    // doc.text(`Position: ${employees.role}`, 10, 30);

    const pdfOutput = doc.output('blob');
    saveAs(pdfOutput, 'employee-details.pdf');
  }
}
