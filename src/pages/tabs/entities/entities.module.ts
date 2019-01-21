import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntitiesPage } from './entities';

@NgModule({
  declarations: [
    EntitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(EntitiesPage),
  ],
})
export class EntitiesPageModule {}
