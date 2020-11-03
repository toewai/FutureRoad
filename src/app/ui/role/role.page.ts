/* cSpell:disable */
import { UserService } from './../../service/user.service';
import { RoleService } from './../../service/role.service';
import { Component, OnInit } from '@angular/core';
import { CRUD } from 'src/app/decorators/mixIns';
import * as Parse from 'parse';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
@Component({
  selector: 'app-role',
  templateUrl: './role.page.html',
  styleUrls: ['./role.page.scss'],
})
export class RolePage implements OnInit {

  constructor() { }
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
  ];
  ngOnInit() {
  }
  addRole(){
    const role = CRUD(RoleService);
    const user = CRUD(UserService);
    const users  = new user();
    users.id = 'kcRp2IFxYP';
    const addRole = new role();
    addRole.name = 'Little bird';
    addRole.userName = users;
    // addRole.user = getUser;
    // addRole.create();
    // console.log(addRole);
    // addRole.saveAll();
    addRole.findById('7MJCBDVOd1').then(data => console.log(data));
  }
}
