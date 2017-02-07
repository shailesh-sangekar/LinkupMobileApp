import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, Network } from 'ionic-native';
import { LoadingController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
// Leave Management
import { ApplyForLeavePage } from '../pages/LeaveManagement/apply-for-leave/apply-for-leave';
import { HolidaysPage } from '../pages/LeaveManagement/holidays/holidays';
import { LeaveApprovalPage } from '../pages/LeaveManagement/leave-approval/leave-approval';
import { MyLeavesPage } from '../pages/LeaveManagement/my-leaves/my-leaves';

import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/index';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  loader: any;
  activePage: any;
  disconnectSubscription: any;
  isDisconnected: boolean = false;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public auth: AuthService, public loadingCtrl: LoadingController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Holidays', component: HolidaysPage },
      { title: 'My Leaves', component: MyLeavesPage },
      { title: 'Apply Leave', component: ApplyForLeavePage },
      { title: 'Approve Leave', component: LeaveApprovalPage }
    ];

    this.activePage = this.pages[0];
  }

  initializeApp() {
    this.presentLoading();
    if (this.auth.isAuthenticated()) {
      this.rootPage = HomePage;
    } else {
      this.rootPage = LoginPage;
    }
    this.loader.dismiss();
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  ionViewDidLoad() {
    console.warn('Registering Network')
    // watch network for a disconnect
    this.disconnectSubscription = Network.onDisconnect().subscribe(() => {
      this.isDisconnected = true;
    });
  }

  ionViewWillUnload() {
    console.warn('Unregistered Network')
    // stop disconnect watch
    this.disconnectSubscription.unsubscribe();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page) {
    return page == this.activePage;
  }
}
