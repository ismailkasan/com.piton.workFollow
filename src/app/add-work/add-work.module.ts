import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddWorkPage } from './add-work.page';

import { AddWorkPageRoutingModule } from './add-work-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddWorkPageRoutingModule
  ],
  declarations: [AddWorkPage]
})
export class AddWorkPageModule {}
