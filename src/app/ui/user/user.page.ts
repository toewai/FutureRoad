import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { CRUD } from './../../decorators/mixIns';
import { UserService } from './../../service/user.service';
import { ModalController } from '@ionic/angular';
import { UserAddPage } from '../../modals/user-add/user-add.page';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  constructor(public modalController: ModalController) {
    this.users.find().then(data => this.rows = data);
  }
  user = CRUD(UserService);
  users  = new this.user();
  rows = [];
  ngOnInit() {
  }
  addUser(){
    const user = CRUD(UserService);
    const addUser = new user();
    addUser.username = 'Sayar Toe';
    addUser.password = '12345';
    addUser.create();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: UserAddPage,
      animated: true,
    });
    modal.onDidDismiss().then((datas: any) =>
      this.users.find().then(data => this.rows = data)
    );
    return await modal.present();
  }
  open(row){
    console.log(row);
  }
}
