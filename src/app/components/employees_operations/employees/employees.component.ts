import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employeesList: any = [];
  formFlag: any = 'create';
  currEmp: any = {};
  constructor() {}

  ngOnInit(): void {}
  createEmployee(employee: any): void {
    console.log(employee);
    this.employeesList.push(employee);
  }
  deleteEmployee(ind: any) {
    this.employeesList = this.employeesList.filter(
      (emp: any, index: any) => index != ind
    );
  }
  editEmployee(emp: any) {
    this.formFlag = 'edit';
    this.currEmp = emp;
  }
  updateEmployee(emp: any) {
    let [updatedEmp] = this.employeesList.filter(
      (e: any, index: any) => index === emp.id
    );
    updatedEmp.ename = emp.ename;
    updatedEmp.job = emp.job;
    updatedEmp.email = emp.email;
    updatedEmp.salary = emp.salary;
    this.formFlag = 'create';
  }
  canceEdit() {
    this.formFlag = 'create';
  }
}
