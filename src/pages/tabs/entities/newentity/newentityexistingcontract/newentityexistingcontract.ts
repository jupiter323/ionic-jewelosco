import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../../providers/globaldata/globaldata';

/**
 * Generated class for the NewentityexistingcontractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newentityexistingcontract',
  templateUrl: 'newentityexistingcontract.html',
})
export class NewentityexistingcontractPage {

  contractname;
  isFocusDes: boolean;
  isGas: boolean = true;
  public locationDetails
  public originLocationDetail = [
    {
      title: "Name of Location",
      loc: "Spanish Hills",
      contractnumber: "TX0000345697-00",
      type: "Residential",
      term: "6 Months",
      status: "Confirmed",
      kind: "gas"
    },
    {
      title: "Name of Location",
      loc: "Hanson Hills ",
      contractnumber: "TX0000345697-00",
      type: "Residential",
      term: "6 Months",
      status: "Confirmed",
      kind: "electron"
    },
    {
      title: "Name of Location",
      loc: "Hanson Hills ",
      contractnumber: "TX0000345697-00",
      type: "Residential",
      term: "6 Months",
      status: "Confirmed",
      kind: "gas"
    },
    {
      title: "Name of Location",
      loc: "Hanson Hills ",
      contractnumber: "TX0000345697-00",
      type: "Residential",
      term: "6 Months",
      status: "Confirmed",
      kind: "gas"
    },
    {
      title: "Name of Location",
      loc: "Hanson Hills ",
      contractnumber: "TX0000345697-00",
      type: "Residential",
      term: "6 Months",
      status: "Confirmed",
      kind: "electron"
    },
    {
      title: "Name of Location",
      loc: "Hanson Hills ",
      contractnumber: "TX0000345697-00",
      type: "Residential",
      term: "6 Months",
      status: "Confirmed",
      kind: "electron"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private gs: GlobaldataProvider) {
    this.locationDetails = this.originLocationDetail.filter((x) => x)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewentityPage');
  }
  isFocus() {
    this.isFocusDes = true;
  }
  isBlur() {
    this.isFocusDes = false;
  }
  selectElectron() {
    this.isGas = false;
  }
  selectGas() {
    this.isGas = true;
  }
  tabClick(e) {
    if (e.index == 0) this.selectGas();
    else this.selectElectron()
  }
  contractnameChange() {
    this.contractname = this.contractname.toUpperCase();
    this.locationDetails = this.originLocationDetail.filter((x) => {
      if (x.contractnumber.includes(this.contractname))
        return x;
    })
  }
}
