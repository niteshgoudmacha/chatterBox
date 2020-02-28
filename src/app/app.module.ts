import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RegisterComponent } from './register/register.component';
=======
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
>>>>>>> a704f55c47a45629959949c7617883100e93290c
>>>>>>> 584bb94ccbfd8f27fdb3d232b7dad30682feb8ee

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RegisterComponent
=======
<<<<<<< HEAD
    LoginComponent
=======
    HomeComponent,
    NavComponent
>>>>>>> a704f55c47a45629959949c7617883100e93290c
>>>>>>> 584bb94ccbfd8f27fdb3d232b7dad30682feb8ee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
