import { CalserveService } from './calserve.service';
import { MatIconModule } from '@angular/material/icon';

import { DisplayComponent } from './display/display.component';
import { OperatorPadComponent } from './operator-pad/operator-pad.component';
import { NumpadComponent } from './numpad/numpad.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalBtnComponent } from './cal-btn/cal-btn.component';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material';
import { OprBtnComponent } from './opr-btn/opr-btn.component';
import { UpperrowComponent } from './upperrow/upperrow.component';
import { UpperrowcbtnComponent } from './upperrowcbtn/upperrowcbtn.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NumpadComponent,
    OperatorPadComponent,
    DisplayComponent,
    CalBtnComponent,
    OprBtnComponent,
    UpperrowComponent,
    UpperrowcbtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
  ],
  exports : [MatIconModule,
              MatButtonModule],
  providers: [CalserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
