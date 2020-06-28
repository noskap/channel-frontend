import {NgModule} from "@angular/core";
import {PostListComponent} from "./post-list.component";
import {SharedModule} from "../../utils/shared.module";

@NgModule({
  declarations: [PostListComponent],
  exports: [PostListComponent],
  imports: [SharedModule],
})
export class PostListModule {

}
