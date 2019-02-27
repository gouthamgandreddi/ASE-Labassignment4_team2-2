import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiPage} from "../api/api";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  username="Spongebob";
  password="Squarepants@123";


  validate(){
    console.log('validation block');
    if(this.username == 'Spongebob' && this.password=='Squarepants@123'){
      console.log('login success');
      this.navCtrl.push(ApiPage);
    }else{
      alert("invalid credentials, re - enter details");
      this.navCtrl.push(LoginPage)
    }
  }
}
