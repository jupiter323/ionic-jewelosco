import { Component } from '@angular/core';
import { HomePage } from './home/home';
import { EntitiesPage } from './entities/entities';
import { BillingPage } from './billing/billing';
import { ProfilePage } from './profile/profile';
import { GlobaldataProvider } from '../../providers/globaldata/globaldata';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EntitiesPage;
  tab3Root = BillingPage;
  tab4Root = ProfilePage;

  constructor(public gs:GlobaldataProvider) {
  
  }
}
