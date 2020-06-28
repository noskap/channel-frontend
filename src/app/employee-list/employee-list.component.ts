import {Component, OnInit} from '@angular/core';
import {Employee} from './employee.model';
import {EmployeeService} from './employee.service';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {

  getEmployeesObservable: Observable<Array<Employee>>;
  addEmployeeObservable: Observable<Employee>;
  userName: string;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getAllEmployees();
  }

  private getAllEmployees() {
    this.getEmployeesObservable = this.employeeService.getAllEmployees()
      .pipe(tap(allEmployees => {
        console.log(allEmployees);
      }));
  }

  addEmployee() {
    this.addEmployeeObservable = this.employeeService.addEmployee(this.userName).pipe(tap(response => {
      console.log(response);
      this.userName = ''
      this.getAllEmployees();
    }));
  }

}
