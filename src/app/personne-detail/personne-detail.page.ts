import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Personne, PersonneService } from '../service/personne.service';

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

  segmentChanged(ev: any) {
    console.log(ev);
    this.personneSav.favory = ev.detail.value;
  }

}
