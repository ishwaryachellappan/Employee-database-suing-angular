import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  @Input() currEmp: any;
  @Output() cancelEditEventEmitter: EventEmitter<any>;
  @Output() updateEmployeeEventEmitter: EventEmitter<any>;
  id: any = '';
  ename: any = '';
  job: any = '';
  email: any = '';
  salary: any = '';
  constructor() {
    this.cancelEditEventEmitter = new EventEmitter();
    this.updateEmployeeEventEmitter = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.currEmp);

    this.id = this.currEmp.id + 1;
    this.ename = this.currEmp.ename;
    this.job = this.currEmp.job;
    this.email = this.currEmp.email;
    this.salary = this.currEmp.salary;
  }
  cancelEdit() {
    this.cancelEditEventEmitter.emit();
  }
  updateEmployee() {
    let emp = {
      id: this.id - 1,
      ename: this.ename,
      job: this.job,
      email: this.email,
      salary: this.salary,
    };
    this.updateEmployeeEventEmitter.emit(emp);
  }
}
