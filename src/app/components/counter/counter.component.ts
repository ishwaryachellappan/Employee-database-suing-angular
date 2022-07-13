import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter = 0;
  constructor() {}

  ngOnInit(): void {}

  increment(): void {
    this.counter = this.counter + 1;
  }
  decrement(): void {
    this.counter = this.counter - 1;
  }
  reset(): void {
    this.counter = 0;
  }
}
