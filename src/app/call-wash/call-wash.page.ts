import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-call-wash',
  templateUrl: './call-wash.page.html',
  styleUrls: ['./call-wash.page.scss'],
})
export class CallWashPage {

  dataReturned: any;
  datetime: string;
  i: any = 0;

  //Services
  price: any;
  place: any;
  select_choice: any = '';
  sel: any = '';

  choice = [{
    choice_id: 1,
    choice_name: 'ซัก',
    choice_price: 50
  }, {
    choice_id: 2,
    choice_name: 'อบ',
    choice_price: 50
  }, {
    choice_id: 3,
    choice_name: 'รีด',
    choice_price: 50
  }]

  constructor(public modalController: ModalController,
    private router: Router,
    public navHttp: Http,
    public http: HttpClient,
    private alertController: AlertController) {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      componentProps: {
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

  // Cal function
  calculateService(CValue) {
    this.select_choice = '';

    // Price
    this.place = CValue.length * 50;
    this.price = this.place;

    // Service
    for (this.i = 0; this.i < 3; this.i++)
      if (CValue[this.i] != undefined)
        this.select_choice += CValue[this.i];

    if (this.select_choice == 1) this.sel = 'ซัก';
    if (this.select_choice == 12) this.sel = 'ซัก,อบ';
    if (this.select_choice == 13) this.sel = 'ซัก,รีด';
    if (this.select_choice == 123) this.sel = 'ซัก,อบ,รีด';
    if (this.select_choice == 2) this.sel = 'อบ';
    if (this.select_choice == 23) this.sel = 'อบ,รีด';
    if (this.select_choice == 3) this.sel = 'รีด';
    console.log('Your choice :', this.sel);
    console.log('Your select :', this.select_choice);

    //  Current Date time
    let date = new Date().toLocaleString();
    this.datetime = date;
    console.log(this.datetime);
  }

  // Alert confirm
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ยืนยันการเรียก',
      // subHeader: 'Sub header',
      message: 'ราคา :' + this.place + '<br>บริการ :' + this.sel,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          role: 'confirm',
          handler: () => {
            console.log("Confirm!");
            let url: string = "http://localhost/ionicApp/insert_service.php";
            let dataJson = new FormData();
            dataJson.append('serv_price', this.price); // total Price
            dataJson.append('serv_choice', this.select_choice); // total Choice
            dataJson.append('serv_date', this.datetime); // date time

            let data: Observable<any> = this.http.post(url, dataJson)
            data.subscribe(res => {
              if (res != null)
                console.log(res);
            });

            this.router.navigateByUrl('/home');
          }
        }

      ]
    });
    await alert.present();
  }


}