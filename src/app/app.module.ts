import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDataEntryComponent } from './person-data-entry/person-data-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonDataDisplayComponent } from './person-data-display/person-data-display.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentListingComponent } from './student-listing/student-listing.component';
import { StudentServiceService } from './student-service.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PersonDataEntryComponent,
    PersonDataDisplayComponent,
    StudentEntryComponent,
    StudentListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentServiceService
  ],
  bootstrap: [PersonDataEntryComponent]
})
export class AppModule { }
