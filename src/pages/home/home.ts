import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public selectedTab = 1;
  public items: any = [
    {
      kind: "new",
      title: "Jewel OSCO – Electricity – COMED – Low bidding Supplier spotted!",
      expiration: "4:37 PM, 10/11/2018",
      detail: [
        {
          title: "Auction number ex",
          det: "IL000000003578-00"
        },
        {
          title: "Commodity type",
          det: "Electricity"
        },
        {
          title: "Date completed",
          det: "10/11/2018"
        },
        {
          title: "Current rate",
          det: "51 420 000"
        }
      ],
      des: "A customer with an exact profile as your Electricity account in COMED, just received a bid that is 20% lower than market average from one of our suppliers.",
      btntitle: "Auction Status"
    },
    {
      kind: "expiring",
      title: "Jewel OSCO – Electricity – COMED –Contract expiring",
      expiration: "4:37 PM, 10/11/2018",
      detail: [
        {
          title: "Auction number ex",
          det: "IL000000003578-00"
        },
        {
          title: "Commodity type",
          det: "Electricity"
        },
        {
          title: "Expiring Date",
          det: "10/11/2018"
        },
        {
          title: "Current rate",
          det: "51 420 000"
        }
      ],

      des: "Auction IL000000003578-00 is expiring. Click below to create your quote.",
      btntitle: "Create Quote"
    },

    {
      kind: "marketdrop",
      title: "Jewel OSCO – Electricity – COMED – 50% chance of lower price",
      expiration: "2:14 PM, 10/11/2018",
      des: "There is 50% chance that today will be the lowest price day for your Electricity contract in Centerpoint. Start an auction as soon as you can to take advantage of this opportunity.",
      btntitle: "Get Bids"

    },
    {
      kind: "response",
      title: "Mike Xu. has responded to your Inquiry",
      expiration: "4:37 PM, 10/11/2018",
      des: "",
      img: "assets/imgs/responseImg.png"
    },
    {
      kind: "auction",
      title: "Auction has stopped",
      expiration: "4:37 PM, 10/11/2018",
      detail: [
        {
          title: "Auction number ex",
          det: "IL000000003578-00"
        },
        {
          title: "Commodity type",
          det: "Electricity"
        },
        {
          title: "Date completed",
          det: "10/11/2018"
        },
        {
          title: "Current rate",
          det: "51 420 000"
        }
      ],
      des: "Auction IL000000003578-00 has completed. Click below to create your quote.",
      btntitle: "Create Quote"

    },

    {
      kind: "audit",
      title: "Audit credit awarded",
      expiration: "4:37 PM, 10/11/2018",
      des: "Good news! We found an error in one or more of your bills. You have overpaid $540.28. Click below to learn more about being credited back. ",
      btntitle: "Review Audit"
    },

    {
      kind: "bill",
      title: "Bill due",
      expiration: "4:37 PM, 10/11/2018",
      detail: [
        {
          title: "Auction number",
          det: "IL000000003578-00"
        },
        {
          title: "Due Date",
          det: "10/11/2018"
        },
        {
          title: "Days until bill is due",
          det: "1"
        },
        {
          title: "Current rate",
          det: "51 420 000"
        }

      ],
      des: "Your bill for Electricity Account 108475393 is due in 10 days. You can pay your bill now.",
      btntitle: "Pay Bill"
    },
    {
      kind: "system",
      title: "System updates",
      expiration: "4:37 PM, 10/11/2018",
      des: "Generic message explaining what has been updated.",
      btntitle: "Create Quote"
    }
  ]
  public ableRemainContracts: boolean = true;

  constructor(public navCtrl: NavController) {

  }

  selectContracts() {
    this.selectedTab = 1;
  }

  selectAlerts() {
    this.selectedTab = 2;
  }

  dismiss(selectedItem: ItemSliding, index: any) {
    selectedItem.close();
    this.items.splice(index, 1);
  }
  snooze(selectedItem: ItemSliding, index: any) {
    selectedItem.close();
    this.items.splice(index, 1);


  }

  delete(selectedItem: ItemSliding, index: any) {
    selectedItem.close();
    this.items.splice(index, 1);
  }
  remainContracts() {
    let newObject = {
      kind: "new",
      title: "Jewel OSCO – Electricity – COMED – Low bidding Supplier spotted!",
      expiration: "4:37 PM, 10/11/2018",
      detail: [
        {
          title: "Auction number ex",
          det: "IL000000003578-00"
        },
        {
          title: "Commodity type",
          det: "Electricity"
        },
        {
          title: "Date completed",
          det: "10/11/2018"
        },
        {
          title: "Current rate",
          det: "51 420 000"
        }
      ],
      des: "A customer with an exact profile as your Electricity account in COMED, just received a bid that is 20% lower than market average from one of our suppliers.",
      btntitle: "Auction Status"
    }
    this.items.push(newObject);

  }

}
