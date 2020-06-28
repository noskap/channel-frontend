import {NgModule} from "@angular/core";
import {CreateChannelComponent} from "./create-channel.component";
import {UserService} from "../../user/user.service";
import {SharedModule} from "../../utils/shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [CreateChannelComponent],
  exports: [CreateChannelComponent],
  providers: [UserService],
})
export class CreateChannelModule {
}
