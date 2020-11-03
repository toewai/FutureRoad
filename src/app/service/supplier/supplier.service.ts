import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import {  column } from '../../decorators/decorator';
@Injectable({
  providedIn: 'root'
})
export class SupplierService extends Parse.Object {

  constructor() {
    super('Supplier');
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
  debit: number;
}
Parse.Object.registerSubclass('Supplier', SupplierService);
