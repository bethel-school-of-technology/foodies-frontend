import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { ApisearchComponent } from './apisearch/apisearch.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HomedisplayComponent } from './apisearch/homedisplay/homedisplay.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ApisearchComponent,
    UserComponent,
    LoginComponent,
    HomedisplayComponent,
    HomeComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
    
    
  ],
  providers: [BrowserModule,HttpResponse ],
  bootstrap: [AppComponent]
})
export class AppModule { }
