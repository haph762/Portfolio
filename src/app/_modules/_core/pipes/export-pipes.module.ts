import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateCustomizePipe } from './date-customize.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [DateCustomizePipe,
  ],
  exports: [DateCustomizePipe]
})
export class ExportPipesModule { }
