import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreenComponent } from './green.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GreenComponent],
  exports: [GreenComponent],
})
export class GreenModule { }
