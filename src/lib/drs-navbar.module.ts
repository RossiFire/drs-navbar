import { NgModule } from '@angular/core';
import { DrsNavbarComponent } from './drs-navbar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DrsNavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([]),
    FontAwesomeModule
  ],
  exports: [
    DrsNavbarComponent
  ]
})
export class DrsNavbarModule { }
