import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
>>>>>>> a704f55c47a45629959949c7617883100e93290c

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    HomeComponent,
    NavComponent
>>>>>>> a704f55c47a45629959949c7617883100e93290c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
