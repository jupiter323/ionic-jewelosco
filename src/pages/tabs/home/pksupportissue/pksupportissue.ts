import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content, TextInput, ActionSheetController } from 'ionic-angular';
import { ChatServiceProvider, ChatMessage, UserInfo } from "../../../../providers/chat-service/chat-service";
import { GlobaldataProvider } from '../../../../providers/globaldata/globaldata';
import { ArchivealertPage } from '../archivealert/archivealert';
/**
 * Generated class for the PksupportissuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pksupportissue',
  templateUrl: 'pksupportissue.html',
})
export class PksupportissuePage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;
  msgList: ChatMessage[] = [];
  user: UserInfo;//me
  toUser: UserInfo//support
  editorMsg = '';
  showEmojiPicker = false;
  supportissue = null
  constructor(
    public navCtrl: NavController,
    private gs: GlobaldataProvider,
    public navParams: NavParams,
    public chatService: ChatServiceProvider,
    public events: Events,
    private actionSheetCtrl: ActionSheetController) {
    // Get the navParams toUserId parameter
    this.toUser = {//suport
      id: '210000198410281948',
      name: 'Hack P.',
      avatar: "assets/imgs/download.jpg"
    };
    // Get mock user information
    this.chatService.getUserInfo()
      .then((res) => {
        this.user = res
      });

    this.supportissue = navParams.data.supportissue || {
      "kind": "support",
      "subject": "Dropped Contract",
      "date": "7:50 PM, 10/11/2018",
      "issue": "Issue # 4039394"
    }
  }

  ionViewWillLeave() {

    this.gs.settingTabHidden(false);
    // unsubscribe
    this.events.unsubscribe('chat:received');
  }

  ionViewDidEnter() {
    //get message list
    this.getMsg()
      .then(() => {
        this.scrollToBottom();
      });

    // Subscribe to received  new message events
    this.events.subscribe('chat:received', msg => {
      this.pushNewMsg(msg);
    });
  }

  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }

  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.messageInput.setFocus();
    }
    this.content.resize();
    this.scrollToBottom();
  }

  /**
   * @name getMsg
   * @returns {Promise<ChatMessage[]>}
   */
  getMsg() {
    // Get mock message list
    return this.chatService
      .getMsgList()
      .then(res => {
        this.msgList = res;
      })
      .catch(err => {
        console.log(err)
      })
  }

  /**
   * @name sendMsg
   */
  sendMsg() {
    if (!this.editorMsg.trim()) return;

    // Mock message
    const id = Date.now().toString();
    let newMsg: ChatMessage = {
      messageId: Date.now().toString(),
      userId: this.user.id,
      userName: this.user.name,
      userAvatar: this.user.avatar,
      toUserId: this.toUser.id,
      time: Date.now(),
      message: this.editorMsg,
      status: 'pending'
    };

    this.pushNewMsg(newMsg);
    this.editorMsg = '';

    if (!this.showEmojiPicker) {
      this.messageInput.setFocus();
    }
    this.messageInput.setFocus();
    this.chatService.sendMsg(newMsg)
      .then(() => {
        let index = this.getMsgIndexById(id);
        if (index !== -1) {
          this.msgList[index].status = 'success';
        }
      })
  }

  /**
   * @name pushNewMsg
   * @param msg
   */
  pushNewMsg(msg: ChatMessage) {
    const userId = this.user.id,
      toUserId = this.toUser.id;
    console.log(msg)
    // Verify user relationships
    if (msg.userId === userId && msg.toUserId === toUserId) {
      this.msgList.push(msg);
      console.log("send");
    } else if (msg.toUserId === userId && msg.userId === toUserId) {
      console.log("receive");
      this.msgList.push(msg);
    }
    this.scrollToBottom();
  }

  getMsgIndexById(id: string) {
    return this.msgList.findIndex(e => e.messageId === id)
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }
  goArchive() {
    this.navCtrl.push(ArchivealertPage)
  }
  attache() {
    let actionSheet = this.actionSheetCtrl.create({
      // title: 'Modify your album',
      buttons: [
        {
          text: 'Camera',
          // role: 'destructive',
          handler: () => {
          }
        },
        {
          text: 'Photo & Video Library',
          handler: () => {
          }
        },
        {
          text: 'Document',
          handler: () => {
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

}
