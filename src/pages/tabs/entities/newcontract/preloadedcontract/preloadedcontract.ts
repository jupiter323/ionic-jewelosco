import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../../providers/globaldata/globaldata';
import { NewentityrelationPage } from '../newentityrelation/newentityrelation';

/**
 * Generated class for the PreloadedcontractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preloadedcontract',
  templateUrl: 'preloadedcontract.html',
})
export class PreloadedcontractPage {

  contractname;
  isFocusDes: boolean;
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
  }
  isFocus() {
    this.isFocusDes = true;
  }
  isBlur() {
    this.isFocusDes = false;
  }
  contractnameChange() {
    this.contractname = this.contractname.toUpperCase();
    this.locationDetails = this.originLocationDetail.filter((x) => {
      if (x.contractnumber.includes(this.contractname))
        return x;
    })
  }
  goRelation(index) {
    this.navCtrl.push(NewentityrelationPage, { location: this.originLocationDetail[index] });
  }
}
