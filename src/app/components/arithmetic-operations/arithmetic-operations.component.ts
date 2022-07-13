import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arithmetic-operations',
  templateUrl: './arithmetic-operations.component.html',
  styleUrls: ['./arithmetic-operations.component.css'],
})
export class ArithmeticOperationsComponent implements OnInit {
  firstNo: any = '';
  secondNo: any = '';
  result: any = '';
  constructor() {}

  ngOnInit(): void {}

  add(): void {
    this.result = this.firstNo - 0 + (this.secondNo - 0);
  }
  sub(): void {
    this.result = this.firstNo - this.secondNo;
  }
  mul(): void {
    this.result = this.firstNo * this.secondNo;
  }
  div(): void {
    this.result = this.firstNo / this.secondNo;
  }
}
