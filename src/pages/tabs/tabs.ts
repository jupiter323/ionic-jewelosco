import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EntitiesPage } from '../entities/entities';
import { BillingPage } from './../billing/billing';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EntitiesPage;
  tab3Root = BillingPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
