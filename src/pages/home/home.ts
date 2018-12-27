import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public selectedTab = 1;

  constructor(public navCtrl: NavController) {

  }

  selectContracts() {
    this.selectedTab = 1;
  }

  selectAlerts() {
    this.selectedTab = 2;
  }

}
