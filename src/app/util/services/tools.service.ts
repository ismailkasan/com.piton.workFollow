import { Injectable } from '@angular/core';
import { EnumImportance } from '../enums/importance';
import { EnumStatus } from '../enums/status';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  public getImportanceValue(type){
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

  public getStatusText(status){
    console.log(status)
    let returnValue = '';

    switch (status) {
      case EnumStatus.Continuing:
        returnValue = "Devam Ediyor"
        break;
      case EnumStatus.Finished:
        returnValue = "Tamamlandı"
        break;
        
      case EnumStatus.NotStart:
        returnValue = "Henüz Başlanmamış"
        break;
        
      case EnumStatus.PassDay:
        returnValue = "Günü Geçmiş"
        break;
    
      default:
        break;
    }

    return returnValue;
  }
}
