import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { MyService } from '../../providers/my-service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-modal-page',
  templateUrl: 'modal-page.html',
  providers: [MyService]
})
export class ModalPage {
  data: any;
  public local : Storage;

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, private service: MyService) {
    this.data = {};
    this.data.username = "";
    this.data.password = "";
    this.local = new Storage();

  }

  login() {
    let username = this.data.username;
    let password = this.data.password;
    let data = JSON.stringify({username, password});
    this.service.postLogin(data);


  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

}
