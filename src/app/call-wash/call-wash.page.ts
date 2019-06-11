import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-call-wash',
  templateUrl: './call-wash.page.html',
  styleUrls: ['./call-wash.page.scss'],
})
export class CallWashPage {
  place;
  i:any = 0;

  choice=[{
    choice_id:1,
    choice_name:'ซักผ้า',
    choice_price:50
  },{
    choice_id:2,
    choice_name:'อบผ้า',
    choice_price:50
  },{
    choice_id:3,
    choice_name:'รีดผ้า',
    choice_price:50
  }]
  
  constructor(public modalController: ModalController) {}
  async presentModal(){
    const modal = await this.modalController.create({
      component: ModalPagePage
    });
    await modal.present();
  }
  
  calculateService(CValue) {
    for(this.i=0;this.i<3;this.i++) 
      if(CValue[this.i]==null)
        CValue[this.i]='0';
      else
        CValue[this.i]='1';

    this.place = CValue.length*50;
    console.log(CValue);
    console.log("Services :",CValue[0]+CValue[1]+CValue[2]);
    
    console.log("Price :",this.place);
  }

}
