import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { EntitiesmoredetailPage } from '../entitiesmoredetail/entitiesmoredetail';

/**
 * Generated class for the EntitiesdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entitiesdetail',
  templateUrl: 'entitiesdetail.html',
})
export class EntitiesdetailPage {

  public locationItem: any;
  public menus: any = [
    // {
    //   menuid: "filter"
    // },
    {
      menuid: "status",
      menutitle: "Status",
      subtitle:"any",
      selecteddetailitem: -1

    },
    {
      menuid: "utility",
      menutitle: "Utility",
      subtitle:"any",
      selecteddetailitem: -1
    },
    {
      menuid: "state",
      menutitle: "State",
      subtitle:"any",
      selecteddetailitem: -1
    },
    {
      menuid: "daterange",
      menutitle: "Date Range",
      subtitle:"any",
      selecteddetailitem: -1
    },
    {
      menuid: "signaturedate",
      menutitle: "Signature date",
      subtitle:"any",
      selecteddetailitem: -1
    },
    {
      menuid: "startdate",
      menutitle: "Start date",
      subtitle:"any",
      selecteddetailitem: -1
    },
    {
      menuid: "enddate",
      menutitle: "End date",
      subtitle:"any",
      selecteddetailitem: -1
    }
  ]
  public headerDtail: any = [
    [
      { title: "Contact Name", des: "Joe O'connor" },
      { title: "Phone number", des: "818-348-3948" }
    ]
  ]
  public detailItems: any = [
    {
      title: "Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas"
    },
    {
      title: "Edison",
      note: "853 N Sunset ",
      kind: "electricity"
    },
    {
      title: "Edison",
      note: "Marina Del Ray Waterside Dr.",
      kind: "gas"
    },
    {
      title: "Edison",
      note: "Anchorage St Apartments  ",
      kind: "gas"
    },
    {
      title: "Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas"
    },
    {
      title: "Edison",
      note: "7741 Bay St.",
      kind: "electricity"
    },
    {
      title: "Edison",
      note: "Riverside Drive Condos",
      kind: "electricity"
    },
    {
      title: "Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas"
    },
    {
      title: "Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas"
    },
    {
      title: "Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas"
    },
    {
      title: "Edison",
      note: "Pacific Blvd Apartments",
      kind: "gas"
    },
    {
      title: "Edison",
      note: "Riverside Drive Condos",
      kind: "electricity"
    },
    {
      title: "Edison",
      note: "Riverside Drive Condos",
      kind: "electricity"
    },
    {
      title: "Edison",
      note: "Riverside Drive Condos",
      kind: "electricity"
    },
    {
      title: "Edison",
      note: "Riverside Drive Condos d",
      kind: "electricity"
    }
  ];
  public gasItems: any = [];
  public electricytiItems: any = [];
  public enableShowGas: boolean = false;
  public enableShowElectricity: boolean = false;
  constructor(
    private menuCtl: MenuController,
    public navCtrl: NavController, public navParams: NavParams) {
    this.locationItem = navParams.data.locationItem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntitiesdetailPage');
    this.filterKind();
  }
  // body
  filterKind() {
    this.gasItems = this.detailItems.filter((item) => {
      if (item.kind == 'gas') return item;
    });

    this.electricytiItems = this.detailItems.filter((item) => {
      if (item.kind == 'electricity') return item;
    });
  }

  showGasItems() {
    this.enableShowGas = true;
  }

  showElectricityItems() {
    this.enableShowElectricity = true;
  }

  // menu controllers
  initMenus() {
    for (let menu of this.menus) {
      this.menuCtl.enable(false, menu.menuid);
    }
  }
  closeMenu() {
    this.menuCtl.close();
  }
  openMenu(menuId: string) {
    this.initMenus();
    this.menuCtl.enable(true, menuId);
    this.menuCtl.toggle(menuId);
  }


  // navigation
  goEntitiesMoreDetail(detailItem: any) {
    this.navCtrl.push(EntitiesmoredetailPage, { locationItem: this.locationItem, detailItem })

  }


}
