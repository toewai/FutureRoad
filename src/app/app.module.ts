import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ParseService } from './service/parse.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { IconWrapperComponent } from './wrapper/icon-wrapper/icon-wrapper.component';
import {IonicSelectableModule} from 'ionic-selectable';
import {SelectSearchComponent} from './wrapper/select-search/select-search.component';
export function initializeApp1(parseService: ParseService) {
  return () => {
    return parseService.Init();
  };
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [{name: 'search' , component: SelectSearchComponent}],
      wrappers: [{ name: 'iconWrapper', component: IconWrapperComponent }],
    }),
    FormlyIonicModule,
    IonicSelectableModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp1,
      deps: [ParseService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
