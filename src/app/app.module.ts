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
<<<<<<< HEAD
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
=======
import { EmployeeAddDeleteComponent } from './components/employee-add-delete/employee-add-delete.component';
import { BuisnessPageComponent } from './components/buisness-page/buisness-page.component';
>>>>>>> a32d954c198b9bc7b361c8d72d1eb5760067c8a2


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavigationComponent,
    SignupPipe,
    TrimPipePipe,
<<<<<<< HEAD
    EmployeeCreateComponent,
    EmployeeListComponent
=======
    EmployeeAddDeleteComponent,
    BuisnessPageComponent
>>>>>>> a32d954c198b9bc7b361c8d72d1eb5760067c8a2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CollapseModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
