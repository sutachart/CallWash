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
 constructor(public navParams: NavParams,public modalController:ModalController) {}
 ngOnInit() {
 }

 dismiss(){
   this.modalController.dismiss();
 }
}
