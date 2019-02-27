import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegistrationPage} from "../registration/registration";
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private http: HttpClient) {
  }
  login(){
    console.log("click on login");
    this.navCtrl.push(LoginPage);
  }

  register(){
    console.log("clicked on register");
    this.navCtrl.push(RegistrationPage);
  }



}
