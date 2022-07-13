import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-pc',
  templateUrl: './child-pc.component.html',
  styleUrls: ['./child-pc.component.css'],
})
export class ChildPcComponent implements OnInit {
  @Input() name: any;
  @Input() job: any;
  constructor() {}

  ngOnInit(): void {}
}
