import { Injectable } from "@angular/core";

import { ToastController } from "@ionic/angular";

import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(public toastController: ToastController) {}

  public SuccessAlert(text: string, timeout: number) {
    return Swal.fire({
      html: '<span class="f-w-600">' + text + "</span>",
      icon: "success",
      width: 350,
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: timeout,
    });
  }

  public NotifyAlert(
    btnText: string,
    titleText: string,
    text: string,
    iconType: any
  ) {
    return Swal.fire({
      title: titleText,
      html: '<span class="f-16">' + text + "</span>",
      allowOutsideClick: false,
      icon: iconType,
      confirmButtonText: btnText,
      customClass: {
        confirmButton: "f-14 bg-inverse",
      },
    });
  }

  public ConfirmAlert(
    confirmButton: string,
    cancelButton: string,
    titleText: string,
    text: string,
    iconType: any
  ) {
    return Swal.fire({
      title: titleText,
      html: '<span class="f-16">' + text + "</span>",
      icon: iconType,
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: confirmButton,
      cancelButtonText: cancelButton,
      customClass: {
        confirmButton: "f-14 bg-inverse",
        cancelButton: "f-14 bg-default text-inverse",
      },
    });
  }

  public async Toast(text: string, duration?: number, type?: string) {
    if (text) {
      const toast = await this.toastController.create({
        message: text,
        duration: duration ? duration : 3000,
        color: type ? type : "primary",
      });
      toast.present();
    }
  }
}
