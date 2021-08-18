import { TeamsComponent } from './pages/teams/teams.component';
import { OperationsComponent } from './pages/operations/operations.component';
import { AllstaffComponent } from './pages/allstaff/allstaff.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeesComponent } from './pages/employees/employees.component';

const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "employees", component: EmployeesComponent
  },
  {
    path: "allstaff", component: AllstaffComponent
  },
  {
    path: "operations", component: OperationsComponent
  },
  {
    path: "teams", component: TeamsComponent
  }
] as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
