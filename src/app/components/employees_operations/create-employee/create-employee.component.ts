import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  ename: any = '';
  job: any = '';
  email: any = '';
  salary: any = '';
  @Output() createEmployeeEventEmitter: EventEmitter<any>;
  constructor() {
    this.createEmployeeEventEmitter = new EventEmitter();
  }

  ngOnInit(): void {}
  createEmployee(): void {
    let emp = {
      ename: this.ename,
      job: this.job,
      email: this.email,
      salary: this.salary,
    };
    console.log(emp);
    this.createEmployeeEventEmitter.emit(emp);
    this.clearForm();
  }
  clearForm(): void {
    this.ename = '';
    this.job = '';
    this.email = '';
    this.salary = '';
  }
}
