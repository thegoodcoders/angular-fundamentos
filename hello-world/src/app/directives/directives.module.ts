import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivesComponent } from './directives.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DirectivesComponent],
  exports: [DirectivesComponent],
})
export class DirectivesModule { }
