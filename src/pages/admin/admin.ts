import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ModalPage } from '../modal-page/modal-page';
import { Page1 } from '../page1/page1';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class Admin {

  data: any;
  public getsession: any;
  x: any;

  public local: Storage;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.data = {};
    this.data.title = "";
    this.data.desc = "";
    this.local = new Storage;
    this.local.set('session', 'true');

  }

  ionViewWillEnter() {
    this.getsession = this.local.get('session');
    this.getsession.then((value)=>{
    this.x = value;
      if( this.x !== ""){
        let modal = this.modalCtrl.create(ModalPage);
        modal.present();
        this.navCtrl.setRoot(Page1);
      //   console.log(x);
      // }else{
      //   console.log("No Data Storage");
    }
    });
  }

}
