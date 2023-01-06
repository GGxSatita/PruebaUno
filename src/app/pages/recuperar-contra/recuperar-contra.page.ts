import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage{

    constructor(private alertController: AlertController) {}

    async solicitar() {
      const alert = await this.alertController.create({

        message: 'Si los datos coinciden recibirás tu correo',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
