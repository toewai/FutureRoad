import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import {  column } from '../../decorators/decorator';
@Injectable({
  providedIn: 'root'
})
export class WarehouseService extends Parse.Object {

  constructor() {
    super('Warehouse');
  }
  @column()
  name: string;
  @column()
  location: string;
}
Parse.Object.registerSubclass('Warehouse', WarehouseService);
