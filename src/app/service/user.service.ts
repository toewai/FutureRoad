// import { CRUD } from './../decorators/mixIns';
import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import {  column } from '../decorators/decorator';
// import { applyMixIns } from '../decorators/mixIns';
@Injectable({
  providedIn: 'root'
})
export class UserService extends Parse.Object {

  constructor() {
    super('_User');
  }
  @column()
  username: string;
  @column()
  password: string;
}
Parse.Object.registerSubclass('_User', UserService);
// applyMixIns(UserService, [CRUD]);
