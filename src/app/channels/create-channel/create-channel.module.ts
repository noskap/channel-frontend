import {NgModule} from "@angular/core";
import {CreateChannelComponent} from "./create-channel.component";
import {NbCardModule} from "@nebular/theme";
import {UserService} from "../../user.service";
import {SharedModule} from "../../utils/shared.module";

@NgModule({
  imports: [SharedModule, NbCardModule],
  declarations: [CreateChannelComponent],
  exports: [CreateChannelComponent],
  providers: [UserService],
})
export class CreateChannelModule {
}
