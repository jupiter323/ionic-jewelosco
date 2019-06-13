import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SamplebillPage } from './samplebill';

@NgModule({
  declarations: [
    SamplebillPage,
  ],
  imports: [
    IonicPageModule.forChild(SamplebillPage),
  ],
})
export class SamplebillPageModule {}
