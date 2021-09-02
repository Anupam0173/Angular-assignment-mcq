import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TestdataServiceService } from './testdata-service.service';
import { ExamComponent } from './exam/exam.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';
import { McqexamComponent } from './mcqexam/mcqexam.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    ResultComponent,
    McqexamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
