import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkItemComponent } from './work-item/work-item.component';
import { ImportanceItemComponent } from './importance-item/importance-item.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [WorkItemComponent, ImportanceItemComponent],
  exports:[WorkItemComponent,ImportanceItemComponent]
})
export class SharedModule {}
