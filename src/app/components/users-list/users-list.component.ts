import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  usersList: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (result) => {
        console.log('Result: ', result);
        this.usersList = result;
      },
      (err) => {
        console.log('Error: ', err);
      }
    );
  }
  deleteUser(uid: any): void {
    console.log('uid: ', uid);
    this.usersList = this.usersList.filter((user: any) => user.id != uid);
    console.log(this.usersList);
  }
}
