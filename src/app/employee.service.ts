import {Injectable} from '@angular/core';
import {Employee} from './employee-list/employee.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NbToastrService} from "@nebular/theme";
import {tap} from "rxjs/operators";
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService<Employee> {

  constructor(httpClient: HttpClient, private nbToaster: NbToastrService) {
    super(httpClient, 'employee');
  }

  getAllEmployees(): Observable<Array<Employee>> {
    return this.httpClient.get<Array<Employee>>(`${this.baseUrl}${this.endPoint}/`);
  }

  addEmployee(userName: string): any {
    const newEmployee = new Employee();
    newEmployee.name = userName;
    return this.httpClient.post(`${this.baseUrl}${this.endPoint}/`, newEmployee).pipe(tap(() => {
      this.nbToaster.success('Created employee.')
    }));
  }
}
