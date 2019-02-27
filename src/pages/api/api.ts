import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TranslateServiceProvider} from "../../providers/translate-service/translate-service";


@IonicPage()
@Component({
  selector: 'page-api',
  templateUrl: 'api.html'
})
export class ApiPage {
  private joke: string;
  private afterTranslation: string;
  private afterPlant: Object;

  public matrix:any [][] = new Array();
  hasData:boolean =false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private trans:TranslateServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApiPage');
  }

   translation_url='https://language.uclassify.com/translate/v1/?key=';
    key='8uMevpYzLogM&source=fr&target=en&t=';
    search='';
   // fun ='https://api.jokes.one/joke/random';
  // url='https://language.uclassify.com/translate/v1/';
  // data = {
  //   'key': '8uMevpYzLog',
  //   'source': 'sv',
  //   'target': 'en',
  //   't': ['se leva']
  // }

  validate() {

    this.trans.getres(this.search).subscribe(res => {
      console.log('api final - ',res);
      console.log(typeof res);
      var transform = JSON.parse(res);
      console.log(typeof transform);
      this.afterTranslation = transform.translations[1] ;
      console.log('----',this.afterTranslation);
    });

  }

  getDetails(){
    console.log('+++',this.afterTranslation);
    this.matrix  = [];
    this.trans.getResponse(this.afterTranslation).subscribe(res => {
      console.log('plant api  final - ',res);
      console.log(typeof res);
      this.afterPlant=res;
      for(let i=0;i<=29;i++) {
        console.log("loop -i ", i);
        this.matrix.push([this.afterPlant[i].common_name,this.afterPlant[i].scientific_name]);
        this.hasData=true;
      }
    })
    }

}
