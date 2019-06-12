import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {

  constructor(public navParams: NavParams, public modalController: ModalController, private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
   this.plt.ready().then(() => {
      this.loadItems();
    });
  }
  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }


  // SQLite
  items: Item[] = [];

  newItem: Item = <Item>{};

  @ViewChild('mylist') mylist: IonList;

  // CREATE
  addItem() {
    // this.newItem.modified = Date.now();
    if (this.newItem == null) {
      this.showToast('Empty!')
    }else if(this.newItem!=null){
      this.newItem.id = Date.now();
      this.storageService.addItem(this.newItem).then(item => {
        this.newItem = <Item>{};
        this.showToast('Item added!');
        this.loadItems(); // Or add it to the array directly
      });
    }
  }

  // READ
  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  // UPDATE
  updateItem(item: Item) {
    item.address = `UPDATED: ${item.address}`;
    // item.modified = Date.now();

    this.storageService.updateItem(item).then(item => {
      this.showToast('Item updated!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or update it inside the array directly
    });
  }

  // DELETE
  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('Item removed!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or splice it from the array directly
    });
  }

  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }


}
