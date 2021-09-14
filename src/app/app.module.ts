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
import {HttpClientModule} from '@angular/common/http';
import { ProperNamePipe } from './proper-name.pipe';
import { UnlessDirective } from './unless.directive';
import { HighlightDirective } from './highlight.directive';
import { ForbiddenNameValidatorDirective } from './forbidden-name-validator.directive';
import { LinkedInComponent } from './linked-in/linked-in.component';
import { LinkedInCommentComponent } from './linked-in-comment/linked-in-comment.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonDataEntryComponent,
    PersonDataDisplayComponent,
    StudentEntryComponent,
    StudentListingComponent,
    ProperNamePipe,
    UnlessDirective,
    HighlightDirective,
    ForbiddenNameValidatorDirective,
    LinkedInComponent,
    LinkedInCommentComponent
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
  bootstrap: [LinkedInComponent]
})
export class AppModule { }
