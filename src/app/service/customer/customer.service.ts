import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import {  column } from '../../decorators/decorator';
@Injectable({
  providedIn: 'root'
})
export class CustomerService extends Parse.Object {

  constructor() {
    super('Customer');
  }
  @column()
  name: string;
  @column()
  companyName: string;
  @column()
  nrcno: string;
  @column()
  phone: string;
  @column()
  address: string;
  @column()
  credit: number;
}
Parse.Object.registerSubclass('Customer', CustomerService);
