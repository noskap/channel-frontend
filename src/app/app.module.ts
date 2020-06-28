import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {
  DEFAULT_THEME,
  NbActionsModule,
  NbGlobalPhysicalPosition,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule,
  NbThemeService,
  NbToastrModule
} from "@nebular/theme";
import {SharedModule} from "./utils/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {ChannelListModule} from "./channels/channel-list/channel-list.module";

const toasterConfig = {
  position: NbGlobalPhysicalPosition.TOP_RIGHT,
  duration: 2000,
  destroyByClick: true,
  preventDuplicates: true,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    NbLayoutModule,
    NbToastrModule.forRoot(toasterConfig),
    NbSidebarModule.forRoot(), //if this is your app.module
    NbEvaIconsModule,
    NbThemeModule.forRoot({name: 'default'}, [DEFAULT_THEME,
      // COSMIC_THEME, DARK_THEME, CORPORATE_THEME
    ]),
    NbIconModule,
    NbActionsModule,
    ChannelListModule,
  ],
  providers: [
    NbThemeService,
    {provide: LOCALE_ID, useValue: 'en-AU'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
