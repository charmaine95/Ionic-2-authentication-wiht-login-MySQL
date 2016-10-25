import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { Observable } from "rxjs/Observable";

@Injectable()
export class MyService {

  public local : Storage;
  mydata: any;

  constructor(public http: Http) {
    this.local = new Storage()
  }
  postLogin(data){
    let link = "http://textkhmer.com/api/securelogin.php";
      return this.http.post(link, data)
        .map(data => {
          this.mydata = data;
          console.log("data")
        }, error =>{
          console.log(error)
        })
  }
}
