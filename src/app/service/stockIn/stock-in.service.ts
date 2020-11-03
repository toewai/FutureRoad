import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import {  column } from '../../decorators/decorator';
import { SupplierService} from '../supplier/supplier.service';
import { WarehouseService} from '../warehouse/warehouse.service';
@Injectable({
  providedIn: 'root'
})
export class StockInService extends Parse.Object {
  constructor() {
    super('StockIn');
  }
  @column()
  stockInDate: Date;
  @column()
  vouncher: string;
  @column()
  supplier: SupplierService;
  @column()
  stockInDetails: any;
  @column()
  payAmount: number;
  @column()
  grandTotal: number;
}
Parse.Object.registerSubclass('StockIn', StockInService);
