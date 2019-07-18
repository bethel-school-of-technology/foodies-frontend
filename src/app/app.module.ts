import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
//import { DataService } from '.data/DataService'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CustomersModule
    ],
  imports: [
    BrowserModule,
    CustomersModule,
    HttpClientModule,
  ],
  // providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
