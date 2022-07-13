import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css'],
})
export class PipesDemoComponent implements OnInit {
  empDetails = {
    name1: 'Sharan Vel E',
    name2: 'Sharan',
    email: 'sharanh@gmail.com',
    mobile: 9994545010,
    experience: '5 years',
    dob: '10-18-2000',
    salary: 50000,
  };

  constructor() {}

  ngOnInit(): void {}
}
