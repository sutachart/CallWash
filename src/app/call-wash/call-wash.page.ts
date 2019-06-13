import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-call-wash',
  templateUrl: './call-wash.page.html',
  styleUrls: ['./call-wash.page.scss'],
})
export class CallWashPage {

  dataReturned:any;
  i: any = 0;

  //Address
  location_name = "บ้าน";
  addess = "888/37 ต. ในเมือง อ.เมือง จ.ขอนแก่น";
  acceptant_name = "วิทยา";
  tel = "0954795579";
  location_detail = "ซอยหลังมอ ทางเข้าร้านจ๊ะโอ๋น";

  //Services
  price: any;
  place: any;
  select_choice: any = '';

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

  constructor(public modalController: ModalController, 
    private router: Router, 
    public navHttp: Http, 
    public http: HttpClient) {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      componentProps: {
        location_name: this.location_name,
        addess: this.addess,
        acceptant_name: this.acceptant_name,
        tel: this.tel,
        location_detail: this.location_detail,
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
    // await modal.present();

    // ---------------------
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    return await modal.present();
  }

  calculateService(CValue) {
    this.select_choice = '';
    // Price
    this.place = CValue.length * 50;
    this.price = this.place;

    // Service
    for (this.i = 0; this.i < 3; this.i++)
      if (CValue[this.i] != undefined)
        this.select_choice += CValue[this.i];
    //console.log(CValue[this.i]+CValue[this.i+1]+CValue[this.i+2]);

    console.log('Your select :', this.select_choice);
  }


  fnInsert() {
    let url: string = "http://localhost/ionicApp/insert_service.php";
    let dataJson = new FormData();
    dataJson.append('serv_price', this.price); // total Price
    dataJson.append('serv_choice', this.select_choice); // total Choice

    let data: Observable<any> = this.http.post(url, dataJson)
    data.subscribe(res => {
      if (res != null)
        console.log(res);
    });
  }

}