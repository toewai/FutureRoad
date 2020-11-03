import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import {  column } from '../../decorators/decorator';
import {CategoryService} from '../category/category.service';
@Injectable({
  providedIn: 'root'
})
export class ItemService extends Parse.Object {

  constructor() {
    super('Item');
  }
  @column()
  name: string;
  @column()
  category: CategoryService;
  @column()
  wholeSale: number;
  @column()
  retail: number;
}
Parse.Object.registerSubclass('Item', ItemService);
