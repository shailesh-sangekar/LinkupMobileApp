import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import * as jQuery from "jquery";
import { ScheduleModule } from 'primeng/primeng';
(window as any).$ = (window as any).jQuery = jQuery;
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

// Corporate
import { LogATicketPage } from '../pages/Corporate/log-a-ticket/log-a-ticket';
import { ConferenceBookingPage } from '../pages/Corporate/conference-booking/conference-booking';

// Timesheet
import { MyTimesheetPage } from '../pages/Timesheet/my-timesheet/my-timesheet';
import { EnterTimesheetPage } from '../pages/Timesheet/enter-timesheet/enter-timesheet';
import { ApproveTimesheetPage } from '../pages/Timesheet/approve-timesheet/approve-timesheet';
import { ApprovedTimesheetPage } from '../pages/Timesheet/approved-timesheet/approved-timesheet';
import { TimesheetReportPage } from '../pages/Timesheet/timesheet-report/timesheet-report';
import { BiometricDiscrepancyApprovalPage } from '../pages/Timesheet/biometric-discrepancy-approval/biometric-discrepancy-approval';

// Leave Management
import { ApplyForLeavePage } from '../pages/LeaveManagement/apply-for-leave/apply-for-leave';
import { HolidaysPage } from '../pages/LeaveManagement/holidays/holidays';
import { LeaveApprovalPage } from '../pages/LeaveManagement/leave-approval/leave-approval';
import { MyLeavesPage } from '../pages/LeaveManagement/my-leaves/my-leaves';

// Certification
import { MyCertificationPage } from '../pages/Certification/my-certification/my-certification';

import { ManageMyProjectsPage } from '../pages/Projects/manage-my-projects/manage-my-projects';
import { EmployeeProjectManagementPage } from '../pages/Projects/employee-project-management/employee-project-management';

// Profile
import { AchievementPage } from '../pages/Corporate/MyProfile/achievement/achievement';
import { CertificationPage } from '../pages/Corporate/MyProfile/certification/certification';
import { EducationPage } from '../pages/Corporate/MyProfile/education/education';
import { EmploymentHistoryPage } from '../pages/Corporate/MyProfile/employment-history/employment-history';
import { ExperiencePage } from '../pages/Corporate/MyProfile/experience/experience';
import { MyProfilePage } from '../pages/Corporate/MyProfile/my-profile/my-profile';
import { PersonalInfoPage } from '../pages/Corporate/MyProfile/personal-info/personal-info';
import { ProfileDetailsPage } from '../pages/Corporate/MyProfile/profile-details/profile-details';
import { SkillSetPage } from '../pages/Corporate/MyProfile/skill-set/skill-set';


// Providers
import { Auth } from '../providers/auth';
import { AuthService } from '../providers/index';
import { LeaveService } from '../pages/LeaveManagement/index';
import { HolidayService } from '../pages/LeaveManagement/index';
import { UserService } from '../pages/LeaveManagement/index';
import { MessageService } from '../providers/index';

// Direrctives
import { LimitToDirective } from '../directives/limit-to';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    HomePage,
    LoginPage,
    LogATicketPage,
    ConferenceBookingPage,
    MyTimesheetPage,
    EnterTimesheetPage,
    ApproveTimesheetPage,
    ApprovedTimesheetPage,
    TimesheetReportPage,
    BiometricDiscrepancyApprovalPage,
    ApplyForLeavePage,
    HolidaysPage,
    LeaveApprovalPage,
    MyLeavesPage,
    ManageMyProjectsPage,
    EmployeeProjectManagementPage,
    MyCertificationPage,
    AchievementPage,
    CertificationPage,
    EducationPage,
    EmploymentHistoryPage,
    ExperiencePage,
    MyProfilePage,
    PersonalInfoPage,
    ProfileDetailsPage,
    SkillSetPage,
    LimitToDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ScheduleModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    HomePage,
    LoginPage,
    LogATicketPage,
    ConferenceBookingPage,
    MyTimesheetPage,
    EnterTimesheetPage,
    ApproveTimesheetPage,
    ApprovedTimesheetPage,
    TimesheetReportPage,
    BiometricDiscrepancyApprovalPage,
    ApplyForLeavePage,
    HolidaysPage,
    LeaveApprovalPage,
    MyLeavesPage,
    MyCertificationPage,
    ManageMyProjectsPage,
    EmployeeProjectManagementPage,
    AchievementPage,
    CertificationPage,
    EducationPage,
    EmploymentHistoryPage,
    ExperiencePage,
    MyProfilePage,
    PersonalInfoPage,
    ProfileDetailsPage,
    SkillSetPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, Auth, AuthService, LeaveService, HolidayService, UserService, MessageService]
})
export class AppModule { }
