import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

import { BlueModule } from '../blue/blue.module';
import { GreenModule } from '../green/green.module';
import { RedModule } from '../red/red.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlueModule,
    GreenModule,
    RedModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
