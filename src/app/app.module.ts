import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GoalkeeperComponent } from './goalkeeper/goalkeeper.component';
import { DeffenderComponent } from './deffender/deffender.component';
import { MidfielderComponent } from './midfielder/midfielder.component';
import { ForwardComponent } from './forward/forward.component';
import { GkinfoComponent } from './gkinfo/gkinfo.component';
import { DfinfoComponent } from './dfinfo/dfinfo.component';
import { MdinfoComponent } from './mdinfo/mdinfo.component';
import { StkinfoComponent } from './stkinfo/stkinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoalkeeperComponent,
    DeffenderComponent,
    MidfielderComponent,
    ForwardComponent,
    GkinfoComponent,
    DfinfoComponent,
    MdinfoComponent,
    StkinfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
