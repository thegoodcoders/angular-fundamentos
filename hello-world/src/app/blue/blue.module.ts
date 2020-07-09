import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlueComponent } from './blue.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BlueComponent],
  exports: [BlueComponent]
})
export class BlueModule { }
