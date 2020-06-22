import { Component, OnInit, Input } from '@angular/core';
import { Work } from 'src/app/model/work';
import { EnumStatus } from 'src/app/util/enums/status';
import { EnumImportance } from 'src/app/util/enums/importance';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-dash',
  templateUrl: './view-dash.component.html',
  styleUrls: ['./view-dash.component.scss'],
})
export class ViewDashComponent implements OnInit {

  @Input('listWork') listWork:Work[] = [];

  get enumImportance(){ return EnumImportance;}

  constructor( private router:Router) {
    
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  finishedCount:number;
  continuingCount:number;
  notStartCount:number;
  passDayCount:number;
  totalCount:number;

  ngOnInit() {

    this.totalCount       = this.listWork.length;
    this.continuingCount  = this.listWork.filter(w=>w.status == EnumStatus.Continuing).length
    this.finishedCount    = this.listWork.filter(w=>w.status == EnumStatus.Finished).length
    this.notStartCount    = this.listWork.filter(w=>w.status == EnumStatus.NotStart).length
    this.passDayCount     = this.listWork.filter(w=>w.status == EnumStatus.PassDay).length

  }

  getImportanceDetail(type){

    return this.listWork.filter(w=>w.importance == type).length
  }

}
