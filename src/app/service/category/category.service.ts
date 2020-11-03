import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import {  column } from '../../decorators/decorator';
@Injectable({
  providedIn: 'root'
})
export class CategoryService extends Parse.Object {

  constructor() {
    super('Category');
  }
  @column()
  name: string;
}
Parse.Object.registerSubclass('Category', CategoryService);
