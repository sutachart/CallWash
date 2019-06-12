import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any = {};
  names:any;
  constructor(private router: Router, public navHttp: Http,public http:HttpClient) {

  }

  fnLogin() {
    console.log("user :", this.user.username);
    console.log("pass :", this.user.password);

    let url: string = "http://localhost/ionicApp/login.php";
    let dataJson = new FormData();
    dataJson.append('user',this.user.username);
    dataJson.append('pass',this.user.password);


    let data:Observable<any> = this.http.post(url, dataJson)
    data.subscribe(res => {
        if(res != null)
          this.router.navigateByUrl('/condition');
          console.log(res);
      });   
  }

  fnInsert() {
    console.log("user :", this.user.username);
    console.log("pass :", this.user.password);

    let url: string = "http://localhost/ionicApp/insertData.php";
    let dataJson = new FormData();
    dataJson.append('user',this.user.username);
    dataJson.append('pass',this.user.password);


    let data:Observable<any> = this.http.post(url, dataJson)
    data.subscribe(res => {
        if(res != null)
          console.log(res);
      });   
  }
}

