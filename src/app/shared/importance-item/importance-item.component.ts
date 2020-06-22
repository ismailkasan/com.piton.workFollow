import { Component, OnInit, Input } from '@angular/core';
import { EnumImportance } from 'src/app/util/enums/importance';

@Component({
  selector: 'app-importance-item',
  templateUrl: './importance-item.component.html',
  styleUrls: ['./importance-item.component.scss'],
})
export class ImportanceItemComponent implements OnInit {

  constructor() { }

  @Input('percent') percent:number;
  @Input('avarage') avarage:string;
  @Input('importanceValue') importanceValue:number;

  
  get enumImportance(){return EnumImportance;}
  ngOnInit() {
    console.log(this.percent)
  }

  
  //TODO: GLOBAL METOT OLARAK AYARLANACAK
  getImportanceValue(type){
    let returnValue = '';
    switch (type) {
      case EnumImportance.Insignificant:
        returnValue = 'Önemsiz';
        break;
        
      case EnumImportance.Normal:
        returnValue = 'Normal';
        break;

      case EnumImportance.Important:
        returnValue = 'Önemli';
        break;
        
      case EnumImportance.Critical:
        returnValue = 'Kritik';
        break;
    
      default:
        break;
    }
    return returnValue;
  }

}
