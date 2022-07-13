import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display-employeesv2',
  templateUrl: './display-employeesv2.component.html',
  styleUrls: ['./display-employeesv2.component.css'],
})
export class DisplayEmployeesv2Component implements OnInit {
  @Input() employeesList: any;
  @Output() deleteEventEmitter: EventEmitter<any>;
  @Output() editEventEmitter: EventEmitter<any>;
  constructor() {
    this.deleteEventEmitter = new EventEmitter();
    this.editEventEmitter = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.employeesList);
  }
  deleteEmployee(id: any): void {
    console.log(id);
    this.deleteEventEmitter.emit(id);
  }
  editEmployee(id: any): void {
    console.log(id);
    this.editEventEmitter.emit(id);
  }
}
