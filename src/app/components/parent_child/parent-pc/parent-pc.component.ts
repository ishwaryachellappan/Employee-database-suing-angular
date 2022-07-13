import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-pc',
  templateUrl: './parent-pc.component.html',
  styleUrls: ['./parent-pc.component.css'],
})
export class ParentPcComponent implements OnInit {
  name = "Sharan Vel E"
  job = "Associate Trainee"
  constructor() {}

  ngOnInit(): void {}
}
