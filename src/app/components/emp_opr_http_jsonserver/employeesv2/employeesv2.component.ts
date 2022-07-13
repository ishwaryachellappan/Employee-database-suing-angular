import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeesv2',
  templateUrl: './employeesv2.component.html',
  styleUrls: ['./employeesv2.component.css'],
})
export class Employeesv2Component implements OnInit {
  employeesList: any = [];
  currEmp: any = {};
  formFlag: any = 'create';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }
  getAllEmployees() {
    this.http.get('http://localhost:8082/employees').subscribe(
      (result: any) => {
        console.log(result);
        this.employeesList = result;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  createEmployee(employee: any): void {
    console.log(employee);

    this.http.post('http://localhost:8082/employees/', employee).subscribe(
      (result) => {
        console.log(result);
        this.getAllEmployees();
        //this.employeesList.push(result);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  deleteEmployee(id: any) {
    this.http.delete('http://localhost:8082/employees/' + id).subscribe(
      (result) => {
        console.log(result);
        this.getAllEmployees();
      },
      (err) => {
        console.log(err);
      }
    );

    //  this.employeesList = this.employeesList.filter((emp: any, index: any) => index != ind);
  }
  editEmployee(id: any) {
    let filteredEmps = this.employeesList.filter((emp: any) => emp.id === id);
    this.currEmp = filteredEmps[0];
    this.formFlag = 'edit';
  }
  updateEmployee(employee: any): void {
    console.log(employee);

    this.http
      .put('http://localhost:8082/employees/' + employee.id, employee)
      .subscribe(
        (result) => {
          console.log(result);
          this.getAllEmployees();
          this.formFlag = 'create';
          //this.employeesList.push(result);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
  cancelEditForm() {
    this.formFlag = 'create';
  }
}
