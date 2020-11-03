import { Injectable } from '@angular/core';
import * as Parse from 'parse';
@Injectable({
  providedIn: 'root'
})
export class ParseService {
  constructor() { }
  Init() {
    Parse.initialize('myAppId', '' , 'myMasterKey');
    (Parse.serverURL as any) = 'http://localhost:1337/parse';
    console.log('parse Initialized');
  }
}
