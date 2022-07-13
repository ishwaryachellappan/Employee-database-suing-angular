import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css'],
})
export class DisplayEmployeesComponent implements OnInit {
  @Input() employeesList: any;
  @Output() deleteEventEmitter: EventEmitter<any>;
  @Output() editEventEmitter: EventEmitter<any>;

  constructor() {
    this.deleteEventEmitter = new EventEmitter();
    this.editEventEmitter = new EventEmitter();
  }

  ngOnInit(): void {}
  deleteEmployee(ind: any): void {
    console.log(ind);
    this.deleteEventEmitter.emit(ind);
  }
  editEmployee(emp: any, ind: any): void {
    emp.id=ind;
    this.editEventEmitter.emit(emp);
  }
}
