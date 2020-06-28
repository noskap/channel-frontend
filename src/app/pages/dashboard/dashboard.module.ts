import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../../utils/shared.module";
import {EmployeeListModule} from "../../employee/employee-list/employee-list.module";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {CreateChannelModule} from "../../channels/create-channel/create-channel.module";
import {PostListModule} from "../../post/post-list/post-list.module";

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    EmployeeListModule,
    CreateChannelModule,
    PostListModule,
  ]
})
export class DashboardModule {

}
