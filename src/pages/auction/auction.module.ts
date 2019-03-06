import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuctionPage } from './auction';

@NgModule({
  declarations: [
    AuctionPage,
  ],
  imports: [
    IonicPageModule.forChild(AuctionPage),
  ],
})
export class AuctionPageModule {}
