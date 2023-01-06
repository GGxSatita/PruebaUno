import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  constructor(private alertController: AlertController) {}

  async alertar() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: 'Usuario registrado',
      buttons: ['Ok !'],
    });

    await alert.present();
  }
}
