import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagecenterPage } from './messagecenter';

@NgModule({
  declarations: [
    MessagecenterPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagecenterPage),
  ],
})
export class MessagecenterPageModule {}
