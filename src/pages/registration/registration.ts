import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiPage} from "../api/api";
import {AlertController} from "ionic-angular";

/**
 * Generated class for thxe RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  firstName='';
  lastName='';
  state='';
  city='';
  zip='';

  validate(){
    console.log("zip type -",typeof(this.zip));
    if(this.firstName.length < 4) {
      //alert('first name should have min 4 charecters');
        const alert = this.alertCtrl.create({
          title: 'First name',
          subTitle: ' first name should have min 4 charecters',
          buttons: ['OK']
        });
        alert.present();
    }else if(this.lastName.length < 4){
      const alert = this.alertCtrl.create({
        title: 'Last name',
        subTitle: ' last name should have min 4 charecters',
        buttons: ['OK']
      });
      alert.present();
    }else if(this.zip.length > 5 ){
      const alert = this.alertCtrl.create({
        title: 'Zip Code',
        subTitle: ' enter valid zip code',
        buttons: ['OK']
      });
      alert.present();
    }else if( !Number(this.zip)){
      console.log(typeof(this.zip));
      const alert = this.alertCtrl.create({
        title: 'Zip Code',
        subTitle: 'enter digits only',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.navCtrl.push(ApiPage);
    }
  }
}
