import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { ApproveTimesheetDetailsPage } from '../approve-timesheet-details/approve-timesheet-details';
import { EmployeeTimesheetService } from '../index';

import { EmployeeTimeSheet } from '../models/employee-timesheet.model';


import { ApproveTimesheetFilterPage } from '../approve-timesheet-filter/approve-timesheet-filter';


@Component({
  selector: 'page-approve-timesheet',
  templateUrl: 'approve-timesheet.html'
})
export class ApproveTimesheetPage {
  origin: String = '';

  public isBulkApprovePermission:boolean = false;
  public timesheetID: string;
  public timesheetObs: Observable<EmployeeTimeSheet[]>;
  public pendingtimesheetsArray: EmployeeTimeSheet[];
  public timesheetList: EmployeeTimeSheet[];
  public userPermissions: any[];
  public selectedTimesheetID: string;
  public isMoreclicked: boolean;
  public isHrApprove: boolean;
  public selectedEmployees: any[];
  public comment: string;
  public isDescending: boolean=true;
  public editMode: boolean;
  public isSelectall:boolean = false;
  public isshowApproveRejectItems = false;


  public approveEmployee: Observable<EmployeeTimesheetService>;
  public noResponseMsg: String;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private employeeTimesheetService: EmployeeTimesheetService,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
  }


  ionViewDidLoad() {
    this.getApproverData();
   }

  ionViewDidEnter() {
    // this.decideAction();
  }

  // decideAction() {
  //   switch (this.navParams.data.caller) {
  //     case 'my-timesheet':
  //       console.log('my-timesheet => approve-timesheets');
  //       this.getUserData();
  //       break;
  //     case 'enter-timesheet':
  //       console.log('enter timesheet => approve-timesheets');
  //       break;

  //     default:
  //       console.log('unknown caller => approve-timesheets');
  //       this.getApproverData();
  //       break;
  //   }
  // }


  getUserData() {
    var loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loader.present().then(() => {
      this.employeeTimesheetService.getMyTimesheets().subscribe((res: any) => {
        if (res.length > 0) {
          this.approveEmployee = res.reverse();
          //console.log(res);
        }
        loader.dismiss();
      }, (err) => {
        loader.dismiss();
      });
    });
  }

  getApproverData() {
    var loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loader.present().then(() => {
      this.employeeTimesheetService.getApproverApprovedTimesheets().subscribe((res: any) => {
        if (res.length > 0) {
          this.approveEmployee = res.reverse();
          console.log(res);
          localStorage.setItem('approveTimesheetsBadgeCount', res.length);
        }
        loader.dismiss();
      }, (err) => {
        loader.dismiss();
      });
    });
  }

  getPendingApproverData() {
    var loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loader.present().then(() => {
      this.employeeTimesheetService.getApproverPendingTimesheets().subscribe((res: any) => {
        if (res.length > 0) {
          this.pendingtimesheetsArray = res.reverse();
          //console.log(res);
          localStorage.setItem('approveTimesheetsBadgeCount', res.length);
        }
        loader.dismiss();
      }, (err) => {
        loader.dismiss();
      });
    });
  }

  itemTapped(entry) {
    this.navCtrl.push(ApproveTimesheetDetailsPage, { id: entry.ID, caller: 'approve-timesheet' });
  }
  onFilter() {
    let modal = this.modalCtrl.create(ApproveTimesheetFilterPage);
    modal.present();
  }
  onSort() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Sort Your Timesheets',
      buttons: [
        {
          text: 'Date Ascending',
          role: 'date ascending',
          handler: () => {
            if (this.isDescending === false) {
              // this.approveEmployee.ApproverUser.reverse();
              this.isDescending = true;
            }
          }
        }, {
          text: 'Date Descending',
          role: 'date descending',
          handler: () => {
            if (this.isDescending) {
              // this.approveEmployee.reverse();
              this.isDescending = false;
            }
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }

  /** Bulk Timesheet Approval functionality */

    /** Bulk Approval */

  /** Multiselction of List item */

  longPressedItem(leave: any)
  {
  this.isshowApproveRejectItems = true;
 // this.selectLeave(leave,true);
  }

  editTimsheet() {
    this.editMode = !this.editMode;
    if(this.editMode == false)
    {
      this.isshowApproveRejectItems = false;
      this.selectedEmployees = [];
     this.pendingtimesheetsArray.forEach(leave => {
         /// this.selectLeave(leave,false);
        });
    }
    
  }

  selectAllLeaves()
  {
    this.selectedEmployees = [];
     this.pendingtimesheetsArray.forEach(leave => {
          //this.selectLeave(leave,true);
        });
  }

  

}
