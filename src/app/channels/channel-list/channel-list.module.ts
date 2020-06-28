import {NgModule} from "@angular/core";
import {ChannelListComponent} from "./channel-list.component";
import {SharedModule} from "../../utils/shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [ChannelListComponent],
  exports: [ChannelListComponent],
})
export class ChannelListModule {
}
