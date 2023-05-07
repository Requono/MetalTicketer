import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MatButtonModule } from '@angular/material/button';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [MainComponent, SuccessComponent],
  imports: [CommonModule, MainRoutingModule, MatButtonModule],
})
export class MainModule {}
