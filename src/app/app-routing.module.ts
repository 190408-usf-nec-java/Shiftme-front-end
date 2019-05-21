import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
=======
import { ShiftsComponent } from './components/shifts/shifts.component';
>>>>>>> shiftspage
import { SignupComponent } from './components/signup/signup.component';
import { BuisnessPageComponent } from './components/buisness-page/buisness-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
<<<<<<< HEAD
    path: 'employee',
    component: EmployeeListComponent
  },
  {
    path: 'employee-create',
    component: EmployeeCreateComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
=======
    path: 'shifts',
    component: ShiftsComponent
  },  {
    path: 'signup',
    component: SignupComponent
  }, {
>>>>>>> shiftspage
    path: 'business',
    component: BuisnessPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
