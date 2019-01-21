import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatExpansionModule, MatTabsModule, MatButtonModule, MatInputModule } from '@angular/material';
import { EntitiesPage } from '../pages/entities/entities';
import { BillingPage } from './../pages/billing/billing';
import { LoginPage } from '../pages/login/login';
import { ForgotPage } from '../pages/forgot/forgot';
import { RegistrationPage } from '../pages/registration/registration';
import { SignaturePadModule } from 'angular2-signaturepad';
import { RisktolerancePage } from '../pages/risktolerance/risktolerance';
import { QuestionsPage } from '../pages/questions/questions';
import { TermsandconditionsPage } from '../pages/termsandconditions/termsandconditions';
import { EntitiesdetailPage } from '../pages/entitiesdetail/entitiesdetail';
import { EntitiesmoredetailPage } from '../pages/entitiesmoredetail/entitiesmoredetail';
import { PipesModule } from '../pipes/pipes.module';
import { ProfilePage } from '../pages/profile/profile';
import { ChatPage } from '../pages/chat/chat';
import { ChatServiceProvider } from '../providers/chat-service/chat-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ContactPage,
    HomePage,
    TabsPage,
    EntitiesPage,
    BillingPage,
    ForgotPage,
    RegistrationPage,
    RisktolerancePage,
    QuestionsPage,
    TermsandconditionsPage,
    EntitiesdetailPage,
    EntitiesmoredetailPage,
    ProfilePage,
    ChatPage

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    SignaturePadModule,
    PipesModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ContactPage,
    HomePage,
    TabsPage,
    EntitiesPage,
    BillingPage,
    ForgotPage,
    RegistrationPage,
    RisktolerancePage,
    QuestionsPage,
    TermsandconditionsPage,
    EntitiesdetailPage,
    EntitiesmoredetailPage,
    ProfilePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ChatServiceProvider
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
