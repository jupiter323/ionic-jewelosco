import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ContracthistoryPage } from '../contracthistory/contracthistory';

/**
 * Generated class for the EntitiesmoredetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entitiesmoredetail',
  templateUrl: 'entitiesmoredetail.html',
})
export class EntitiesmoredetailPage {
  public detailItem: any;
  public locationItem: any;
  public showHiddenBtn: string;
  public isShowFullInfo: boolean;
  public headerDtail: any = [
    [
      { title: "Contact Name", des: "Joe O'connor" },
      { title: "Type", des: "Residential" }
    ],
    [
      { title: "Term", des: "6 Months" },
      { title: "Status", des: "Confirmed" }
    ],
    [
      { title: "Rate", des: "$0.57900" },
      { title: "Signature date", des: "Sep 17, 2018 01:42 PM" }
    ],
    [
      { title: "Start Date", des: "Oct 01,2018" },
      { title: "Expiration data", des: "Apr 01,2019" }
    ],
    [
      { title: "Phone", des: "301-423-3423" },
      { title: "Email", des: "mona_8080@yahoo.com" }
    ]
  ];
  public showHeaderDtail: any = [
    [
      { title: "Contact Name", des: "Joe O'connor" },
      { title: "Type", des: "Residential" }
    ],
    [
      { title: "Term", des: "6 Months" },
      { title: "Status", des: "Confirmed" }
    ],
    [
      { title: "Rate", des: "$0.57900" },
      { title: "Signature date", des: "Sep 17, 2018 01:42 PM" }
    ],
    [
      { title: "Start Date", des: "Oct 01,2018" },
      { title: "Expiration data", des: "Apr 01,2019" }
    ],
    [
      { title: "Phone", des: "301-423-3423" },
      { title: "Email", des: "mona_8080@yahoo.com" }
    ]
  ];
  public locationDetails: any = [
    {
      title: "Name of Location",
      loc: "4175 S. Laspina St. Tulare, CA 93274",
      utility: "GME",
      meter: "13,500",
      account: "055646131"
    },
    {
      title: "Name of Location",
      loc: "4175 S. Laspina St. Tulare, CA 93274",
      utility: "GME",
      meter: "13,500",
      account: "055646131"
    },
    {
      title: "Name of Location",
      loc: "4175 S. Laspina St. Tulare, CA 93274",
      utility: "GME",
      meter: "13,500",
      account: "055646131"
    },
    {
      title: "Name of Location",
      loc: "4175 S. Laspina St. Tulare, CA 93274",
      utility: "GME",
      meter: "13,500",
      account: "055646131"
    },
    {
      title: "Name of Location",
      loc: "4175 S. Laspina St. Tulare, CA 93274",
      utility: "GME",
      meter: "13,500",
      account: "055646131"
    },
    {
      title: "Name of Location",
      loc: "4175 S. Laspina St. Tulare, CA 93274",
      utility: "GME",
      meter: "13,500",
      account: "055646131"
    }
  ];
  constructor(
    private actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController, public navParams: NavParams) {
    this.detailItem = this.navParams.data.detailItem;
    this.locationItem = this.navParams.data.locationItem;
    this.showHiddenBtn = "Show full info";
    this.isShowFullInfo = false;
    this.filterHeaderDetailByShowHide();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntitiesmoredetailPage');
  }


  showHideFullInfo() {
    this.isShowFullInfo = !this.isShowFullInfo;
    this.filterHeaderDetailByShowHide();

  }
  filterHeaderDetailByShowHide() {
    if (!this.isShowFullInfo)
      this.showHeaderDtail = this.headerDtail.filter((a, index) => {
        if (index < 2) return a;
      })
    else
      this.showHeaderDtail = this.headerDtail.filter((a, index) => a)
  }
  settings() {
    let actionSheet = this.actionSheetCtrl.create({
      // title: 'Modify your album',
      buttons: [

        {
          text: 'Edit',
          // role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Reassign',
          handler: () => {
            console.log('Reassign');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  goContracthistory() {
    this.navCtrl.push(ContracthistoryPage);
  }
  contact(detail: any, kindIndex) {

  }

}
