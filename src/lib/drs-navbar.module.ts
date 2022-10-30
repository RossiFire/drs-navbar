import { NgModule } from '@angular/core';
import { DrsNavbarComponent } from './drs-navbar.component';
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
    RouterModule,
  ],
  exports: [
    DrsNavbarComponent
  ]
})
export class DrsNavbarModule { }
