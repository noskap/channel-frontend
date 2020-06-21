import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {DEFAULT_THEME, NbLayoutModule, NbThemeModule, NbThemeService} from "@nebular/theme";
import {SharedModule} from "./utils/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

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
    NbThemeModule.forRoot({name: 'default'}, [DEFAULT_THEME,
      // COSMIC_THEME, DARK_THEME, CORPORATE_THEME
    ]),
  ],
  providers: [
    NbThemeService,
    {provide: LOCALE_ID, useValue: 'en-AU'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
