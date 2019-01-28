import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatExpansionModule, MatTabsModule, MatButtonModule, MatInputModule } from '@angular/material';
import { CalendarModule } from "ion2-calendar";
import { SignaturePadModule } from 'angular2-signaturepad';

import { HomePage } from '../pages/tabs/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EntitiesPage } from '../pages/tabs/entities/entities';
import { BillingPage } from './../pages/tabs/billing/billing';
import { LoginPage } from '../pages/login/login';
import { ForgotPage } from '../pages/forgot/forgot';
import { RegistrationPage } from '../pages/registration/registration';
import { RisktolerancePage } from '../pages/registration/risktolerance/risktolerance';
import { QuestionsPage } from '../pages/registration/questions/questions';
import { TermsandconditionsPage } from '../pages/registration/termsandconditions/termsandconditions';
import { EntitiesdetailPage } from '../pages/tabs/entities/entitiesdetail/entitiesdetail';
import { EntitiesmoredetailPage } from '../pages/tabs/entities/entitiesmoredetail/entitiesmoredetail';
import { ProfilePage } from '../pages/tabs/profile/profile';
import { ChatPage } from '../pages/tabs/profile/messagecenter/chat/chat';
import { ChatServiceProvider } from '../providers/chat-service/chat-service';
import { ContracthistoryPage } from '../pages/tabs/entities/contracthistory/contracthistory';
import { PipesModule } from '../pipes/pipes.module';
import { GlobaldataProvider } from '../providers/globaldata/globaldata';
import { ApiProvider } from '../providers/api/api';
import { BillingdetailPage } from '../pages/tabs/billing/billingdetail/billingdetail';
import { ProfileeditPage } from '../pages/tabs/profile/profileedit/profileedit';
import { ProfilechangepassPage } from '../pages/tabs/profile/profilechangepass/profilechangepass';
import { MessagecenterPage } from '../pages/tabs/profile/messagecenter/messagecenter';
import { BillinginfoPage } from '../pages/tabs/profile/billinginfo/billinginfo';
import { SecuritysettingsPage } from '../pages/tabs/profile/securitysetting/securitysetting';
import { EmailsupportPage } from '../pages/tabs/profile/messagecenter/emailsupport/emailsupport';
import { CallsupportPage } from '../pages/tabs/profile/messagecenter/callsupport/callsupport';
import { EmojiProvider } from '../providers/chat-service/emoji';
import { EmojiPickerComponentModule } from '../components/emoji-picker/emoji-picker.module';
import { ProvidefeedbackPage } from '../pages/tabs/profile/messagecenter/providefeedback/providefeedback';
import { FeedexperiencePage } from '../pages/tabs/profile/messagecenter/providefeedback/feedexperience/feedexperience';
import { FeedsuppliersPage } from '../pages/tabs/profile/messagecenter/providefeedback/feedsuppliers/feedsuppliers';
import { RateuppliersPage } from '../pages/tabs/profile/messagecenter/providefeedback/rateuppliers/rateuppliers';
import { TroublshootPage } from '../pages/tabs/profile/troublshoot/troublshoot';
import { TrainingvideosPage } from '../pages/tabs/profile/trainingvideos/trainingvideos';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,    
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
    ChatPage,
    ContracthistoryPage,
    BillingdetailPage,
    ProfileeditPage,
    ProfilechangepassPage,
    MessagecenterPage,
    BillinginfoPage,
    SecuritysettingsPage,
    EmailsupportPage,
    CallsupportPage,
    ProvidefeedbackPage,
    FeedexperiencePage,
    FeedsuppliersPage,
    RateuppliersPage,
    TroublshootPage,
    TrainingvideosPage
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
    CalendarModule,
    EmojiPickerComponentModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,    
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
    ChatPage,
    ContracthistoryPage,
    BillingdetailPage,
    ProfileeditPage,
    ProfilechangepassPage,
    MessagecenterPage,
    BillinginfoPage,
    SecuritysettingsPage,
    EmailsupportPage,
    CallsupportPage,
    ProvidefeedbackPage,
    FeedexperiencePage,
    FeedsuppliersPage,
    RateuppliersPage,
    TroublshootPage,
    TrainingvideosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ChatServiceProvider,
    GlobaldataProvider,
    ApiProvider,
    EmojiProvider
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
