import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import {  column } from '../../decorators/decorator';
import {CustomerService} from '../customer/customer.service';
@Injectable({
  providedIn: 'root'
})
export class StockOutService extends Parse.Object {
  constructor() {
    super('StockOut');
  }
  @column()
  stockOutDate: Date;
  @column()
  vouncher: string;
  @column()
  customer: CustomerService;
  @column()
  stockOutDetails: any;
  @column()
  payAmount: number;
  @column()
  grandTotal: number;
}
Parse.Object.registerSubclass('StockOut', StockOutService);
