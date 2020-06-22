import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardPage } from './dashboard.page';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { ViewDashComponent } from '../components/view-dash/view-dash.component';
import { ViewListComponent } from '../components/view-list/view-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DashboardPageRoutingModule,
    SharedModule
  ],
  declarations: [DashboardPage,ViewDashComponent,ViewListComponent],
  exports:[SharedModule],
  providers:[DatePipe]
})
export class DashboardPageModule {}
