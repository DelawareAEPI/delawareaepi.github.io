import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//import { environment } from "src/environments/environment";
//import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFireDatabase } from '@angular/fire/compat/database';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrotherhoodComponent } from './brotherhood/brotherhood.component';
import { RushComponent } from './rush/rush.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrotherhoodComponent,
    RushComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    //AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
