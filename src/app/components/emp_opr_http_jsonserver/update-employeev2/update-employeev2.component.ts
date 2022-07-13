import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-employeev2',
  templateUrl: './update-employeev2.component.html',
  styleUrls: ['./update-employeev2.component.css'],
})
export class UpdateEmployeev2Component implements OnInit {
  id: any = '';
  ename: any = '';
  job: any = '';
  email: any = '';
  salary: any = '';
  @Input() emp: any;
  @Output() updateEmployeeEventEmitter: EventEmitter<any>;
  @Output() cancelEditEventEmitter: EventEmitter<any>;

  constructor() {
    this.updateEmployeeEventEmitter = new EventEmitter();
    this.cancelEditEventEmitter = new EventEmitter();
  }

  ngOnInit(): void {
    this.id = this.emp.id;
    this.ename = this.emp.ename;
    this.job = this.emp.job;
    this.email = this.emp.email;
    this.salary = this.emp.salary;
  }
  updateEmployee(): void {
    let emp = {
      id: this.id,
      ename: this.ename,
      job: this.job,
      email: this.email,
      salary: this.salary,
    };
    console.log(emp);
    this.updateEmployeeEventEmitter.emit(emp);
    this.clearForm();
  }
  clearForm(): void {
    this.ename = '';
    this.job = '';
    this.email = '';
    this.salary = '';
  }
  cancelEditForm() {
    this.cancelEditEventEmitter.emit();
  }
}
