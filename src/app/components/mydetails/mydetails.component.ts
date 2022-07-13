import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css'],
})
export class MydetailsComponent implements OnInit {
  title = 'first_example';
  myName = 'Sangeetha Niralleni V';
  age = 45;
  mySkills = ['Java', 'Angular', 'React'];
  myDetails = {
    Name: 'Sangeetha Niralleni V',
    email: 'sangeetha@gmail.com',
    mobile: 123456789,
    experience: '3 years',
  };
  counter = 0;

  constructor() {}

  ngOnInit(): void {}
  counterDemo(): void {
    this.counter = this.counter + 1;
  }
}
