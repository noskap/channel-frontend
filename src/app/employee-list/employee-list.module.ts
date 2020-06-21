import {NgModule} from '@angular/core';
import {EmployeeListComponent} from './employee-list.component';
import {NbCardModule} from "@nebular/theme";
import {SharedModule} from "../utils/shared.module";
import {EmployeeService} from "../employee.service";
import {EmployeeListRoutingModule} from "./employee-list-routing.module";

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    SharedModule,
    NbCardModule,
    EmployeeListRoutingModule,
  ],
  exports: [EmployeeListComponent],
  providers: [EmployeeService]
})
export class EmployeeListModule {
}
