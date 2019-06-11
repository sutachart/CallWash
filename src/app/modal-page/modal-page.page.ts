import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
 // "value" passed in componentProps
 @Input() value: number;
 location_name;
 addess;
 acceptant_name;
 tel;
 location_detail;

 constructor(public navParams: NavParams,public modalController:ModalController) {
   this.location_name = this.navParams.get('location_name');
   this.addess = this.navParams.get('address');
   this.acceptant_name = this.navParams.get('acceptant_name');
   this.tel = this.navParams.get('tel');
   this.location_detail = this.navParams.get('location_detail');
 }
 ngOnInit() {
 }

 dismiss(){
   this.modalController.dismiss();
 }
}
