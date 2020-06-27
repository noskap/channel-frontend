import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../../utils/shared.module";
import {EmployeeListModule} from "../../employee-list/employee-list.module";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {NbCardModule} from "@nebular/theme";
import {ChannelsModule} from "../../channels/channels.module";

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [],
  imports: [SharedModule, EmployeeListModule, DashboardRoutingModule, NbCardModule, ChannelsModule]
})
export class DashboardModule {

}
