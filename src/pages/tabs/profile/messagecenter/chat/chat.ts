import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events, Content, TextInput } from 'ionic-angular';
import { ChatServiceProvider, ChatMessage, UserInfo } from "../../../../../providers/chat-service/chat-service";
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class ChatPage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;
  msgList: ChatMessage[] = [];
  user: UserInfo;
  toUser: UserInfo
  editorMsg = '';
  // showEmojiPicker = false;
  constructor(public navParams: NavParams,
    public chatService: ChatServiceProvider,
    public events: Events, ) {
    // Get the navParams toUserId parameter
    this.toUser = {
      id: '210000198410281948',
      name: 'Hancock'
    };
    // Get mock user information
    this.chatService.getUserInfo()
      .then((res) => {
        this.user = res
      });
  }

  ionViewWillLeave() {

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
    })
  }

  onFocus() {
    // this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }

  // switchEmojiPicker() {
  //   this.showEmojiPicker = !this.showEmojiPicker;
  //   if (!this.showEmojiPicker) {
  //     this.messageInput.setFocus();
  //   }
  //   this.content.resize();
  //   this.scrollToBottom();
  // }

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
      // userAvatar: this.user.avatar,
      toUserId: this.toUser.id,
      time: Date.now(),
      message: this.editorMsg,
      status: 'pending'
    };

    this.pushNewMsg(newMsg);
    this.editorMsg = '';

    // if (!this.showEmojiPicker) {
    //   this.messageInput.setFocus();
    // }
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
}
