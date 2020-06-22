import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkPage } from './add-work.page';

const routes: Routes = [
  {
    path: '',
    component: AddWorkPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddWorkPageRoutingModule {}
