import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { SignupComponent } from './components/signup/signup.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SignupPipe } from './pipes/signup.pipe';
import { TrimPipePipe } from './pipes/trim-pipe.pipe';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { BuisnessPageComponent } from './components/buisness-page/buisness-page.component';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ShiftpoolComponent } from './components/shiftpool/shiftpool.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavigationComponent,
    SignupPipe,
    TrimPipePipe,
    EmployeeCreateComponent,
    EmployeeListComponent,
    ShiftsComponent,
    BuisnessPageComponent,
    ShiftpoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CollapseModule,
    ModalModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
