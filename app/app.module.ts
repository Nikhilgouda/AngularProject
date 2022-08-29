import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LostpasswordComponent } from './components/lostpassword/lostpassword.component';
import { HomeComponent } from './components/home/home.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { AddhobbyComponent } from './components/addhobby/addhobby.component';
import { DeletehobbyComponent } from './components/deletehobby/deletehobby.component';
import { MyfavComponent } from './components/myfav/myfav.component';
import { MypipePipe } from './pipe/mypipe.pipe';
import { PipeFormatPipe } from './pipe/pipe-format.pipe';
import { PhoneFormatPipe } from './pipe/phone-format.pipe';
import { MydirDirective } from './directives/mydir.directive';
import { PhdirDirective } from './directives/phdir.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LostpasswordComponent,
    HomeComponent,
    HobbyComponent,
    AddhobbyComponent,
    DeletehobbyComponent,
    MyfavComponent,
    MypipePipe,
    PipeFormatPipe,
    PhoneFormatPipe,
    MydirDirective,
    PhdirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
