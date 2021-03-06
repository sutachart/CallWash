import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CallWashPage } from './call-wash.page';
import { ModalPagePage } from '../modal-page/modal-page.page';

const routes: Routes = [
  {
    path: '',
    component: CallWashPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CallWashPage,ModalPagePage],
  entryComponents: [ModalPagePage]
})
export class CallWashPageModule {}
