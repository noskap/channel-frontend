import {NgModule} from "@angular/core";
import {SharedModule} from "../utils/shared.module";
import {ChannelsComponent} from "./channels.component";
import {UserService} from "../user.service";
import {NbCardModule} from "@nebular/theme";

@NgModule({
  imports: [SharedModule, NbCardModule],
  declarations: [ChannelsComponent],
  exports: [ChannelsComponent],
  providers: [UserService],
})
export class ChannelsModule {
}
