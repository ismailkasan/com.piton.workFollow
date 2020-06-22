import { Component } from "@angular/core";
import { Work } from "../model/work";
import { DataService } from "../util/services/data.service";
import { AlertService } from "../util/services/alert.service";

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: "app-add-work",
  templateUrl: "add-work.page.html",
  styleUrls: ["add-work.page.scss"],
})
export class AddWorkPage {

  work: Work;
  private groupWork : FormGroup;

  constructor(private svcData: DataService, private svcAlert: AlertService,  private formBuilder: FormBuilder, private router:Router ) {
    
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.work = new Work();

    this.groupWork = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      importance: [0, Validators.required],
      workDate: ['', Validators.required],
      
    });
  }

  saveWork() {
    console.log(this.groupWork.valid)
    if (this.groupWork.valid) {
      
    this.svcAlert
    .ConfirmAlert(
      "Evet",
      "Hayır",
      "İşlem Onayı",
      "Görevi Kaydetmek istedğinize emin misiniz?",
      "question"
    )
    .then((isOk) => {
      if (isOk.value) {
        this.svcData.AddWork(this.work).subscribe((data)=>{

            if (data.isSuccess == 1) {
              console.log(data);
              this.svcAlert.SuccessAlert(data.message,3000);
              this.groupWork.reset();
              this.router.navigateByUrl('/tabs/dashboard');
            }
            else{
              this.svcAlert.SuccessAlert(data.message,3000);
            }
        })
      }
    });
    } else {
      this.svcAlert.Toast('Zorunlu Alanları Doldurunuz',2000,'danger')
    }
    console.log(this.work);
  }
}
