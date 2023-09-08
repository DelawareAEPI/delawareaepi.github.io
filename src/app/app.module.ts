import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//import { environment } from "src/environments/environment";
//import { AngularFireModule } from "@angular/fire/compat";
//import { AngularFireAuthModule } from "@angular/fire/compat/auth";
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';
import { environment } from "src/environments/environment";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrotherhoodComponent } from './pages/brotherhood/brotherhood.component';
import { RushComponent } from './pages/rush/rush.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { AcademicComponent } from './pages/academic/academic.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrotherModalComponent } from './components/brother-modal/brother-modal.component';
import { CompositeComponent } from './pages/composite/composite.component';
import { HistoryComponent } from './pages/history/history.component';
import { HistoryModalComponent } from './components/history-modal/history-modal.component';
import { PhilanthropyComponent } from './pages/philanthropy/philanthropy.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GalleryModalComponent } from './components/gallery-modal/gallery-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrotherhoodComponent,
    RushComponent,
    CustomInputComponent,
    AcademicComponent,
    NewsletterComponent,
    ContactComponent,
    BrotherModalComponent,
    CompositeComponent,
    HistoryComponent,
    HistoryModalComponent,
    PhilanthropyComponent,
    GalleryComponent,
    GalleryModalComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
    //AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [{
    provide: API_KEY,
    useValue: environment.firebaseConfig.apiKey,
  },
  GoogleSheetsDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
