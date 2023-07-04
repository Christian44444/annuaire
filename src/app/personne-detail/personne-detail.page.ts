import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Personne, PersonneService } from '../service/personne.service';
import { CallnumberService } from '../service/callnumber.service';
// Utilisation Camera nécessite des ajouts de permission dans le Manifest d'android
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-personne-detail',
  templateUrl: './personne-detail.page.html',
  styleUrls: ['./personne-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PersonneDetailPage implements OnInit {
  public personne!: Personne;
  public personneSav!: Personne;
  public personneService: PersonneService = inject(PersonneService);
  callNumberService: CallnumberService = inject(CallnumberService);
  constructor() {}

  ngOnInit() {
    this.personne = this.personneService.getCurrent();
    this.personneSav = Object.assign({}, this.personne);
  }
  save() {
    Object.assign(this.personne, this.personneSav);
  } 

  cancel() {
    Object.assign(this.personneSav, this.personne);
  }
  // Nécessite FormsModule et IonicModule
  segmentChanged(ev: any) {
    console.log(ev);
    this.personneSav.favory = ev.detail.value;
  }
  launchCall(phone: string) {
    this.callNumberService.launchCall(phone);
  }
  chargePicture() {
    Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
     }).then((value) => {
        // Here you get the image as result.
        this.personneSav.image = value.dataUrl
     }).catch((e) => {
      //Noting if canceled picture 
    });
  }
}
