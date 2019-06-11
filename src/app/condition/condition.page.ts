import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.page.html',
  styleUrls: ['./condition.page.scss'],
})
export class ConditionPage {

  constructor(private router: Router) { 

  }

  btnCallWashPage() {
    this.router.navigateByUrl('/call-wash');
  }
  
}
