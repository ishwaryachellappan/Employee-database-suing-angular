import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-cp',
  templateUrl: './parent-cp.component.html',
  styleUrls: ['./parent-cp.component.css'],
})
export class ParentCpComponent implements OnInit {
  msg = '';
  constructor() {}

  ngOnInit(): void {}
  getMsg($data: any): void {
    this.msg = $data;
  }
}
