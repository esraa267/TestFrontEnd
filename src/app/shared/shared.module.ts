import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorDirective } from './Directives/color/color.directive';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [SpinnerComponent, ColorDirective],
  imports: [CommonModule, BrowserAnimationsModule, MatProgressSpinnerModule],
  exports: [SpinnerComponent, ColorDirective, CommonModule],
})
export class SharedModule {}
