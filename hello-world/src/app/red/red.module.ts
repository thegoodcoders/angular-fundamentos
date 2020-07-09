import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedComponent } from './red.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RedComponent],
  exports: [RedComponent],
})
export class RedModule { }
