/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/** Third Party Dependencies */
import { CacheService } from 'ng2-cache/ng2-cache';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/** Module Level Dependencies */
import { BaseService } from '../../../providers/shared';
import { MessageService } from '../../../providers/shared';
import { Timesheet } from '../models/timesheet.model';
import { Employee } from '../models/employee.model';
import { EmployeeTimeSheet } from '../models/employee-timesheet.model';
import { Events } from 'ionic-angular';
/** Context for service calls */
const CONTEXT = 'EmployeeTimesheet';

/** Service Definition */
@Injectable()
export class EmployeeTimesheetService extends BaseService {

    constructor(public http: Http, messageService: MessageService,
    public _cacheService: CacheService,public unauthorizedEvent:Events
    ) {
        super(http, CONTEXT,unauthorizedEvent);
    }

    getMyTimesheets(): Observable<Employee> {
        if (this._cacheService.exists('myTimesheets')) {
            return new Observable<any>((observer: any) => {
                observer.next(this._cacheService.get('myTimesheets'));
            });
        } else {
            return this.getChildList$('MyTimesheets',0,0,true).map(res => {
                this._cacheService.set('myTimesheets', res.json(), { maxAge: 60 * 60 });
                return res.json();
            }).catch(err => {
                return this.handleError(err);
            });
        }
    }

    getMyTimesheetDetail(id: any){
        /** TODO: API not ready, needs updation*/

        if (this._cacheService.exists('myTimesheetDetail')) {
            return new Observable<any>((observer: any) => {
                observer.next(this._cacheService.get('myTimesheetDetail'));
            });
        } else {
            return this.getChildList$('GetMyTimesheetDetail/' + id, 0, 0, true).map(res => {
                this._cacheService.set('myTimesheetDetail' + id, res.json(), { maxAge: 60 * 60 });
                return res.json();
            }).catch(err => {
                return this.handleError(err);
            });
        }
    }

    getApproverPendingTimesheets(): Observable<EmployeeTimeSheet> {

        if (this._cacheService.exists('approverPendingTimesheets')) {
            return new Observable<any>((observer: any) => {
                observer.next(this._cacheService.get('approverPendingTimesheets'));
            });
        } else {
            return this.getChildList$('ApproverPendingTimesheets',0,0,true).map(res => {
                this._cacheService.set('approverPendingTimesheets', res.json(), { maxAge: 60 * 60 });
                return res.json();
            }).catch(err => {
                return this.handleError(err);
            });
        }
    }

    getApproverApprovedTimesheets(): Observable<Employee> {

        if (this._cacheService.exists('approverApprovedTimesheets')) {
            return new Observable<any>((observer: any) => {
                observer.next(this._cacheService.get('approverApprovedTimesheets'));
            });
        } else {
            return this.getChildList$('ApproverApprovedTimesheets',0,0,true).map(res => {
                this._cacheService.set('approverApprovedTimesheets', res.json(), { maxAge: 60 * 60 });
                return res.json();
            }).catch(err => {
                return this.handleError(err);
            });
        }
    }

    getTimesheetApprovalData(id: any){

        if (this._cacheService.exists('timesheetApprovalData')) {
            return new Observable<any>((observer: any) => {
                observer.next(this._cacheService.get('timesheetApprovalData'));
            });
        } else {
            return this.getChildList$('GetTimesheetApprovalData/' + id, 0, 0, true).map(res => {
                this._cacheService.set('timesheetApprovalData' + id, res.json(), { maxAge: 60 * 60 * 24 });
                return res.json();
            }).catch(err => {
                return this.handleError(err);
            });
        }
    }

}
