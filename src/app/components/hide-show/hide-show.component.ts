import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hide-show',
  templateUrl: './hide-show.component.html',
  styleUrls: ['./hide-show.component.css'],
})
export class HideShowComponent implements OnInit {
  toggleFlag = true;
  constructor() {}

  ngOnInit(): void {}

  toggler(): void {
    this.toggleFlag = !this.toggleFlag;
  }
}
