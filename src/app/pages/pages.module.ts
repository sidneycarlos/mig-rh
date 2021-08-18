import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { OperationsComponent } from './operations/operations.component';
import { TeamsComponent } from './teams/teams.component';
import { AllstaffComponent } from './allstaff/allstaff.component';



@NgModule({
  declarations: [
    DashboardComponent,
    EmployeesComponent,
    OperationsComponent,
    TeamsComponent,
    AllstaffComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
