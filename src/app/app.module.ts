import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {RegistrationPage} from "../pages/registration/registration";
import {ApiPage} from "../pages/api/api";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TranslateServiceProvider } from '../providers/translate-service/translate-service';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrationPage,
    ApiPage,
    HomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistrationPage,
    ApiPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TranslateServiceProvider
  ]
})
export class AppModule {}
