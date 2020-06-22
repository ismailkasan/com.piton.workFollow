import { Component } from '@angular/core';
import { DataService } from '../util/services/data.service';
import { Work } from '../model/work';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {

  showPanel = "dash"
  listWork:Work[] = []

  constructor(private svcData:DataService, private router:Router) {
    console.log("on")
    
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  
    this.listWork = this.svcData.WorkList;
  }

  

}
