import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { EntitiesmoredetailPage } from '../entitiesmoredetail/entitiesmoredetail';
import { capitals } from './capitals';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult, CalendarComponentOptions } from "ion2-calendar";
import { GlobaldataProvider } from '../../../../providers/globaldata/globaldata';

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
      subtitle: "Any",
      selecteddetailitem: -1,
      items: ["Quote", "Pending", "Signed", "Pay Roll", "Confirmed", "Rejected", "Dropped", "Contract History"]
    },
    {
      menuid: "utility",
      menutitle: "Utility",
      subtitle: "Any",
      selecteddetailitem: -1,
      items: ["Southern California Edison", "Pacific Gas and Electric"]
    },
    {
      menuid: "state",
      menutitle: "State",
      subtitle: "Any",
      selecteddetailitem: -1,
      items: capitals
    },
    {
      menuid: "daterange",
      menutitle: "Date Range",
      subtitle: "Any",
      selecteddetailitem: -1,
      items: [{ from: "", to: "" }]
    },
    {
      menuid: "signaturedate",
      menutitle: "Signature date",
      subtitle: "Any",
      selecteddetailitem: -1,
      items: []
    },
    {
      menuid: "startdate",
      menutitle: "Start date",
      subtitle: "Any",
      selecteddetailitem: -1,
      items: []
    },
    {
      menuid: "enddate",
      menutitle: "End date",
      subtitle: "Any",
      selecteddetailitem: -1,
      items: []
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

  public type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  public format: 'YYYY-MM-DD'
  public optionsRange: CalendarComponentOptions = {
    from: new Date(1),
    pickMode: 'range',
    color: 'primary',
    // showMonthPicker: false,
    // showToggleButtons: false,
    weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthFormat: "MMMM YYYY",
    // monthPickerFormat: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };
  public optionsPicker: CalendarComponentOptions = {
    from: new Date(1),
    color: 'primary',
    // showMonthPicker: false,
    // showToggleButtons: false,
    weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthFormat: "MMMM YYYY",
    // monthPickerFormat: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };

  public optionsModalRange: CalendarModalOptions = {
    from: new Date(1),
    pickMode: 'range',
    color: 'primary',
    // showMonthPicker: false,
    // showToggleButtons: false,
    weekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthFormat: "MMMM YYYY",
    // monthPickerFormat: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };


  constructor(
    public gs: GlobaldataProvider,
    private menuCtl: MenuController,
    public navCtrl: NavController, public navParams: NavParams) {
    this.locationItem = navParams.data.locationItem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntitiesdetailPage');
    this.filterKind();
  }
  ionViewWillLeave() {
    this.gs.settingTabHidden(false);
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
  mainMenuClosed() {
    // this.gs.settingTabHidden(false);
  }
  closeMenu() {
    this.gs.settingTabHidden(false);
    this.menuCtl.close();
  }
  closeSelectedMenu() {
    this.initMenus();
    this.menuCtl.enable(true, "filter");
    this.menuCtl.toggle("filter");
  }
  openMenu(menuId: string) {
    this.gs.settingTabHidden(true);
    this.initMenus();
    this.menuCtl.enable(true, menuId);
    this.menuCtl.toggle(menuId);
  }


  selectAnswerItem(menuKind, answerindex) {
    this.menus[menuKind].selecteddetailitem = answerindex;
    this.menus[menuKind].subtitle = this.menus[menuKind].items[answerindex];
    switch (menuKind) {
      case 2:
        this.menus[menuKind].subtitle = this.menus[menuKind].items[answerindex].state;
    }
    this.closeSelectedMenu();
  }

  onChangeCalendar(event: any, indexOfMenu) {
    this.menus[indexOfMenu].selecteddetailitem = 0;
    if (indexOfMenu == 3)
      this.menus[3].subtitle = this.timeConverter(this.menus[3].items[0].from) + " - " + this.timeConverter(this.menus[3].items[0].to);
    else
      this.menus[indexOfMenu].subtitle = this.timeConverter(this.menus[indexOfMenu].items[0]);

    this.closeSelectedMenu();

  }
  timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date: any = a.getDate();
    date = (date.toString().length == 1) ? ('0' + date) : date
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = month + ' ' + date + ', ' + year;
    return time;
  }
  // navigation
  goEntitiesMoreDetail(detailItem: any) {
    this.navCtrl.push(EntitiesmoredetailPage, { locationItem: this.locationItem, detailItem })

  }


}
