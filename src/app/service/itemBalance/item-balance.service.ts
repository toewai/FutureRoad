import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { column } from '../../decorators/decorator';
import { ItemService } from '../item/item.service';
import { WarehouseService } from '../warehouse/warehouse.service';
@Injectable({
  providedIn: 'root',
})
export class ItemBalanceService extends Parse.Object {
  constructor() {
    super('ItemBalance');
  }
  @column()
  amount: number;
  @column()
  item: ItemService;
  @column()
  warehouse: WarehouseService;
}
