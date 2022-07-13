import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { MydetailsComponent } from './components/mydetails/mydetails.component';
import { HideShowComponent } from './components/hide-show/hide-show.component';
import { ArithmeticOperationsComponent } from './components/arithmetic-operations/arithmetic-operations.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';
import { ParentPcComponent } from './components/parent_child/parent-pc/parent-pc.component';
import { ChildPcComponent } from './components/parent_child/child-pc/child-pc.component';
import { ParentCpComponent } from './components/child_parent/parent-cp/parent-cp.component';
import { ChildCpComponent } from './components/child_parent/child-cp/child-cp.component';
import { EmployeesComponent } from './components/employees_operations/employees/employees.component';
import { CreateEmployeeComponent } from './components/employees_operations/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/employees_operations/update-employee/update-employee.component';
import { DisplayEmployeesComponent } from './components/employees_operations/display-employees/display-employees.component';
import { Employeesv2Component } from './components/emp_opr_http_jsonserver/employeesv2/employeesv2.component';
import { CreateEmployeev2Component } from './components/emp_opr_http_jsonserver/create-employeev2/create-employeev2.component';
import { UpdateEmployeev2Component } from './components/emp_opr_http_jsonserver/update-employeev2/update-employeev2.component';
import { DisplayEmployeesv2Component } from './components/emp_opr_http_jsonserver/display-employeesv2/display-employeesv2.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MydetailsComponent,
    HideShowComponent,
    ArithmeticOperationsComponent,
    UsersListComponent,
    PipesDemoComponent,
    ParentPcComponent,
    ChildPcComponent,
    ParentCpComponent,
    ChildCpComponent,
    EmployeesComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    DisplayEmployeesComponent,
    Employeesv2Component,
    CreateEmployeev2Component,
    UpdateEmployeev2Component,
    DisplayEmployeesv2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
