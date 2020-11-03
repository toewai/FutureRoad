import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import {  column } from '../decorators/decorator';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends Parse.Object {

  constructor() {
    super('Role');
  }
  @column()
  name: string;
  @column()
  userName: UserService;
}
Parse.Object.registerSubclass('Role', RoleService);
