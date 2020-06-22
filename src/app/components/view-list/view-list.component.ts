import { Component, OnInit, Input } from '@angular/core';
import { Work } from 'src/app/model/work';
import { DataService } from 'src/app/util/services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss'],
})
export class ViewListComponent implements OnInit {

  constructor(private svcData:DataService, private datePipe: DatePipe) { }

  @Input('listWork') listWork:Work[] = [];
  
  value:any;
  
  ngOnInit() {
    
  }

  getFilterList(type){

    this.listWork = this.svcData.WorkList;
    
    let filterList:Work[] = [];
    let addWeek = new Date();
    let addMonth = new Date();

    addWeek.setDate(addWeek.getDate() + 7)
    addMonth.setDate(addMonth.getDate() + 30)

    let now = new Date().setHours(0,0,0,0);

    switch(type){
      case 1 : filterList =  this.listWork.filter(w=> w.workDate.setHours(0,0,0,0) == new Date().setHours(0,0,0,0));break;
      case 2 : filterList =  this.listWork.filter(w=>w.workDate <= new Date(addWeek) && w.workDate >= new Date(now));break;
      case 3 : filterList =  this.listWork.filter(w=>w.workDate <= new Date(addMonth) && w.workDate >= new Date(now));break;
      case 4 : filterList =  this.listWork; break;
    }

    this.listWork = []
    this.listWork = filterList;
  }

}
