import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionSheetController, AlertController, IonicModule, ToastController } from '@ionic/angular';
import { Personne, PersonneService } from '../service/personne.service';
import { Router } from '@angular/router';
import { CallnumberService } from '../service/callnumber.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.page.html',
  styleUrls: ['./personne.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

/**
 * Page de la liste des personnes de l'annuaire
 * Appelle le détail pour modifier ajouter ou supprimer une personne 
 */
export class PersonnePage implements OnInit {
  public personnes!: Personne[]; 
  private personneService: PersonneService = inject(PersonneService);
  public isActionSheetOpen = false;
  
  public actionSheetController: ActionSheetController = inject(ActionSheetController);
  public alertController: AlertController = inject(AlertController);
  public toastController: ToastController = inject(ToastController);
  public router: Router = inject(Router);
  callNumberService: CallnumberService = inject(CallnumberService);
  constructor() { }

  /**
   * Initialisation du carnet d'adresse
   */
  ngOnInit() {
    this.personnes = this.personneService.getAll();
  }

  async gestionActionSheet(personne: Personne) {
    const actionSheet = await this.actionSheetController.create({
      header: personne.firstName + ' ' + personne.lastName,
      buttons: [
        {
          text: 'Favorit',
          icon: 'star',
          handler: () => {
            this.markFavory(personne);
          },
        },
        {
          text: 'Moyennement favorit',
          icon: 'star-half',
          handler: () => { this.markNotFavory(personne); 
          },

        },
        {
          text: 'Supprimer',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.gestionDeleteAlert(personne);
          },
        },

        {
          text: 'Annuler',
          icon: 'close',
          role: 'cancel',
          handler: () => {},
        },
      ],
    });
    actionSheet.present();
  }

  markFavory (personne: Personne) {personne.favory = 'Favory'; }
  markNotFavory (personne: Personne) {personne.favory = 'Half'; }
  
  deletePersonne(personne: Personne) {
    this.personnes = this.personnes.filter((p) => p.id !== personne.id);
    this.toastDelete(personne);
  }

  async gestionDeleteAlert(personne: Personne) {
    const alert = await this.alertController.create(
      {
        header: 'Supprimer cette personne ?',
        subHeader: personne.firstName + ' ' + personne.lastName,
        message: 'Cette opération ne pourra être annulée!',
        buttons: [
          {
            text: 'Supprimer',
            handler: () => this.deletePersonne(personne)
          },
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {},
          }
        ],
      });
      alert.present();
  }

  async toastDelete(personne: Personne) {
    const toast = await this.toastController.create(
      {
        message: personne.firstName + ' ' + personne.lastName + ' a été supprimée.',
        position: 'top',
        duration: 3000
      });
      toast.present();
  }

  goToPersonneDetail(personne: Personne) {
    this.personneService.setCurent(personne);
    this.router.navigateByUrl('personne-detail');
  }

  launchCall(phone: string) {
    this.callNumberService.launchCall(phone);
  }

}
