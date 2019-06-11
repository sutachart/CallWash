import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-call-wash',
  templateUrl: './call-wash.page.html',
  styleUrls: ['./call-wash.page.scss'],
})
export class CallWashPage {
  location_name = "บ้าน";
  addess = "888/37 ต. ในเมือง อ.เมือง จ.ขอนแก่น";
  acceptant_name = "วิทยา";
  tel = "0954795579";
  location_detail = "ซอยหลังมอ ทางเข้าร้านจ๊ะโอ๋น";
  place;
  i: any = 0;
  price_of: any = 0;
  status_price: any = 0;

  choice = [{
    choice_id: 1,
    choice_name: 'ซักผ้า',
    choice_price: 50
  }, {
    choice_id: 2,
    choice_name: 'อบผ้า',
    choice_price: 50
  }, {
    choice_id: 3,
    choice_name: 'รีดผ้า',
    choice_price: 50
  }]

  constructor(public modalController: ModalController) {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      componentProps: {
        location_name: this.location_name,
        addess: this.addess,
        acceptant_name: this.acceptant_name,
        tel: this.tel,
        location_detail: this.location_detail
      }
    });
    await modal.present();
  }

  calculateService(CValue) {
    // for (this.i = 0; this.i < 3; this.i++){
    //   if (CValue[this.i] == null)
    //     CValue[this.i] = '0';
    //   else
    //     CValue[this.i] = '1';
    // }

    // for (this.i = 0; this.i < CValue.length; this.i++) {
    //   if (CValue[this.i] == this.i + 1) {
    //     this.price_of += this.choice[this.i].choice_price;
    //   } else {
    //     this.price_of -= this.choice[this.i].choice_price;
    //   }
      // this.price_of += this.i*this.choice[this.i].choice_price
      // if (CValue[this.i] == null){
      //   CValue[this.i] = '0';
      //   this.price_of -= this.choice[this.i].choice_price;
      // }
      // else{
      //   CValue[this.i] = '1';
      //   this.price_of += this.choice[this.i].choice_price;
      // }

    this.place = CValue.length * 50;
    // this.place = this.price_of;
    console.log(CValue);
    for (let j: any = 0; j < CValue.length; j++) {
      console.log("Services :", CValue[j]);
    }

    console.log("Price :", this.place);
  }

}
