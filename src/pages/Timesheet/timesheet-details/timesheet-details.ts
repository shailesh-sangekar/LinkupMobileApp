import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
//import { Observable } from 'rxjs/Rx';

import { EmployeeTimesheetService } from '../index';

import { DailyTimesheetDetailPage } from '../daily-timesheet-detail/daily-timesheet-detail';

@Component({
  selector: 'page-timesheet-details',
  templateUrl: 'timesheet-details.html'
})
export class TimesheetDetailsPage {
  timesheetID: Number = 0;
  employeeTimesheet;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private employeeTimesheetService: EmployeeTimesheetService
    , public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {

    switch (this.navParams.data.caller) {
      case 'enter-timesheet':
        //console.log('enter-timesheet => timesheet-details');
        this.enterTimesheet();
        break;
      case 'my-timesheet':
        //console.log('my-timesheet => timesheet-details');
        this.getMyTimesheetDetails(this.navParams.data.payload.ID);
        break;

      default:
        //console.log('unknown => timesheet-details');
        this.enterTimesheet();
        break;
    }

  }

  enterTimesheet() {
    this.getMyTimesheetDetails(1);  //getting stub data
    // this.navCtrl.push(DailyTimesheetDetailPage, { readOnly: false });
  }

  getMyTimesheetDetails(id) {
    this.timesheetID = id;

    var loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loader.present().then(() => {
      this.employeeTimesheetService.getMyTimesheetDetail(id).subscribe((res: any) => {
        // if(res)
        this.employeeTimesheet = res.ApproverTimesheet;

        loader.dismiss();
      }, (err) => {
        loader.dismiss();
      });
    });
  }

  recordTapped(rec) {
    this.navCtrl.push(DailyTimesheetDetailPage, { dailyData: rec, readOnly: true, submittedStatus: this.employeeTimesheet.SubmittedStatus });
  }

}
