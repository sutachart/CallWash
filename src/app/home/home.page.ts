import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // user: any = {};
  // constructor(private router: Router, public navHttp: Http,public http:HttpClient) {

  // }

  // fnLogin() {
  //   console.log("user :", this.user.username);
  //   console.log("pass :", this.user.password);

  //   let url: string = "http://localhost/ionicApp/login.php";
  //   // let dataJson = JSON.stringify({
  //   //   username: this.user.username,
  //   //   password: this.user.password
  //   // });
  //   let dataJson = new FormData();
  //   dataJson.append('user',this.user.username);
  //   dataJson.append('pass',this.user.password);


  //   let data:Observable<any> = this.http.post(url, dataJson)
  //   data.subscribe(res => {
  //       if(res != null)
  //         this.router.navigateByUrl('/condition');
  //       console.log(res);
  //     });
      
  // }

  items: Item[] = [];
 
  newItem: Item = <Item>{};
 
  @ViewChild('mylist')mylist: IonList;
 
  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
 
  // CREATE
  addItem() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();
 
    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item>{};
      this.showToast('Item added!')
      this.loadItems(); // Or add it to the array directly
    });
  }
 
  // READ
  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }
 
  // UPDATE
  updateItem(item: Item) {
    item.title = `UPDATED: ${item.title}`;
    item.modified = Date.now();
 
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
