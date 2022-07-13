import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-cp',
  templateUrl: './child-cp.component.html',
  styleUrls: ['./child-cp.component.css'],
})
export class ChildCpComponent implements OnInit {
  msg: any;
  @Output() msgEventEmitter: EventEmitter<any>;
  constructor() {
    this.msgEventEmitter = new EventEmitter();
  }

  ngOnInit(): void {}
  sendMsg(): void {
    console.log('mst@child: ', this.msg);
    this.msgEventEmitter.emit(this.msg);
    this.msg = '';
  }
}
