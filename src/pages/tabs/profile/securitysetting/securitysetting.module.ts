import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecuritysettingsPage } from './securitysetting';

@NgModule({
  declarations: [
    SecuritysettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SecuritysettingsPage),
  ],
})
export class SecuritysettingsPageModule {}
