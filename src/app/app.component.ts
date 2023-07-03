import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

/**
 * Paramétrage des pages de l'appli pour le menu
 */
export class AppComponent {
  mockPage: Page[] =
  [
    {id: '1', name: 'home',     label: 'Annuaire',  url: '/home',   icon: 'home'},
    {id: '2', name: 'personne', label: 'Personnes', url: '/personne', icon: 'people'}
  ];

  constructor() {}
}
export interface Page {
  id: string;
  name: string;
  label: string;
  url?: string;
  icon?: string;
}
