import {NgModule} from '@angular/core';
import {EmployeeListComponent} from './employee-list.component';
import {NbCardModule} from "@nebular/theme";
import {SharedModule} from "../../utils/shared.module";
import {EmployeeService} from "./employee.service";

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    SharedModule,
    NbCardModule,
  ],
  exports: [EmployeeListComponent],
  providers: [EmployeeService]
})
export class EmployeeListModule {
}
