import { EnumStatus } from "./../../util/enums/status";
import { Component, OnInit, Input } from "@angular/core";
import { EnumImportance } from "src/app/util/enums/importance";
import { DataService } from "src/app/util/services/data.service";
import { AlertService } from "src/app/util/services/alert.service";
import { AlertController } from '@ionic/angular';
import { Work } from 'src/app/model/work';
import { DatePipe } from '@angular/common';
import { ToolsService } from 'src/app/util/services/tools.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: "app-work-item",
  templateUrl: "./work-item.component.html",
  styleUrls: ["./work-item.component.scss"],
})
export class WorkItemComponent implements OnInit {
  constructor(private svcData: DataService, private svcAlert: AlertService, private svcTools:ToolsService, public alertController: AlertController, private datePipe:DatePipe) {}

  get enumStatus() {
    return EnumStatus;
  }
  get enumImportance() {
    return EnumImportance;
  }

  @Input("workId") workId: number;
  @Input("status") status: number;
  @Input("workName") workName: string = "";
  @Input("workDate") workDate: Date;
  @Input("importance") importance: EnumImportance;

  ngOnInit() {}

  deleteWork(workId) {
    this.svcAlert
      .ConfirmAlert(
        "Evet",
        "Hayır",
        "İşlem Onayı",
        "Kaydı silmek istediğinize emin misiniz?",
        "question"
      )
      .then((isOk) => {
        if (isOk.value) {
          this.svcData.DeleteWork(workId).subscribe((data) => {
            if (data.isSuccess == 1) {
              this.svcAlert.SuccessAlert(data.message, 3000);
              
            } else {
              //TODO: Error mesajları yazılacak.
            }
          });
        }
      });
  }

  finishWork(workId){
    this.svcAlert
    .ConfirmAlert(
      "Evet",
      "Hayır",
      "İşlem Onayı",
      "Görev tamamlandı olarak kaydedilecektir. Onaylıyor musunuz?",
      "question"
    )
    .then((isOk) => {
      if (isOk.value) {
        this.svcData.FinishWork(workId).subscribe((data) => {
          if (data.isSuccess == 1) {
            this.svcAlert.SuccessAlert(data.message, 3000);
          } else {
            //TODO: Error mesajları yazılacak.
          }
        });
      }
    });
  }

  startWork(workId:number){
    this.svcAlert
    .ConfirmAlert(
      "Evet",
      "Hayır",
      "İşlem Onayı",
      "Göreve başlamak istediğinize emin misiniz?",
      "question"
    )
    .then((isOk) => {
      if (isOk.value) {
        this.svcData.StartWork(workId).subscribe((data) => {
          if (data.isSuccess == 1) {
            this.svcAlert.SuccessAlert(data.message, 3000);
          } else {
            //TODO: Error mesajları yazılacak.
          }
        });
      }
    });
  }

  async infoWork(workId){
    let find_work :Work;
     await this.svcData.FindWork(workId).subscribe((data)=>{
        if (data.isSuccess == 1) {
          console.log(data)
          find_work = data.values;

        }
    })

    const alert = await this.alertController.create({
      cssClass: 'info-work',
      message: "<table>"+
              "<tr><th>Görev Adı</th></tr>" +
              "<tr><td>"+find_work.name+"</td></tr>"+
              "<tr><th>Açıklama</th></tr>" +
              "<tr><td>"+find_work.description+"</td> </tr>"+
              "<tr><th>Görev Tarihi</th></tr>" +
              "<tr><td>"+this.datePipe.transform(find_work.workDate,'dd-MM-yyyy')+"</td></tr>"+
              "<tr><th>Başlangıç Tarihi</th></tr>" +
              "<tr><td>"+((find_work.startDate) ? this.datePipe.transform(find_work.startDate,'dd-MM-yyyy') :'Göreve Henüz Başlanmamış')+"</td></tr>"+
              "<tr><th>Bitiş Tarihi</th></tr>" +
              "<tr><td>"+((find_work.endDate) ? this.datePipe.transform(find_work.endDate,'dd-MM-yyyy') :'Görev Henüz Tamamlanmamış')+"</td></tr>"+
              "<tr><th>Önem Derecesi</th></tr>" +
              "<tr><td>"+this.svcTools.getImportanceValue(find_work.importance)+"</td></tr>"+
              "<tr><th>Durumu</th></tr>" +
              "<tr><td>"+this.svcTools.getStatusText(find_work.status)+"</td></tr>"+
               "</table>",
      buttons: ['Kapat']
    });

    await alert.present();

    
  }

}
