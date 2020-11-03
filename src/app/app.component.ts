import { Component } from '@angular/core';

import { Platform , MenuController  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any = 'HomePage';

  pages: any = [{
    title: 'Home', component: 'home'
  },
  {
    title: 'Customers',
    subPages: [{
      title: 'Customer',
      component: 'customers',
    }],
  },
  {
    title: 'Supplier',
    subPages: [{
      title: 'Supplier',
      component: 'suppliers',
    }]
  },
  {
    title: 'Stock In',
    component: 'stock-ins',
  },
  {
    title: 'StockOut',
    component: 'stock-outs',
  },
  {
    title: 'Reports',
    subPages: [{
      title: 'Topic1',
      component: 'login',
    }, {
      title: 'Topic2',
      component: 'login',
    },
    {
      title: 'Topic3',
      component: 'login',
    },
    {
      title: 'Topic4',
      component: 'login',
    }]
  },
  {
    title: 'Settings',
    subPages: [{
      title: 'User',
      component: 'user',
    }, {
      title: 'Role',
      component: 'role',
    },
    {
      title: 'Warehouse',
      component: 'warehouses',
    },
    {
      title: 'Category',
      component: 'categories',
    },
    {
      title: 'Item',
      component: 'items',
    }]
  }
];

  // Selected Side Menu
  selectedMenu: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    public route: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page, index) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component) {
      this.route.navigate([page.component]);
      this.menuCtrl.close();
    } else {
        if (this.selectedMenu === index){
          this.selectedMenu = 0;
        } else{
          this.selectedMenu = index;
        }
    }}
}
