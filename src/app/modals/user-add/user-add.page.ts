import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import { CRUD } from './../../decorators/mixIns';
import { UserService } from './../../service/user.service';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.page.html',
  styleUrls: ['./user-add.page.scss'],
})
export class UserAddPage implements OnInit {

  constructor() { }
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Name',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'P@ssw0rd',
        required: true,
      },
    },
  ];
  ngOnInit() {
  }
  addUser(){
    const user = CRUD(UserService);
    const addUser = new user();
    addUser.username = this.form.get('username').value;
    addUser.password = this.form.get('password').value;
    addUser.create();
  }
  close(){
  }
}
