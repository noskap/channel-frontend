import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../../utils/shared.module";
import {EmployeeListModule} from "../../employee-list/employee-list.module";

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [],
  imports: [SharedModule, EmployeeListModule]
})
export class DashboardModule {

}
