import { Injectable, inject } from '@angular/core';
// Voire localstorage ou indexedDB plus simple pour la persistence
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  public currentPersonne!: Personne; 
  private mockPersonne: Personne[] =
  [
    {id: '1', firstName: 'Christian',     lastName: 'MICHAUD',      job: 'Grouillot de base',   image: '', favory: 'Favory'},
    {id: '2', firstName: 'Pierre',   lastName: 'MICHAUD',     job: 'Architecte système', image: '', favory: 'Favory'},
    {id: '3', firstName: 'Viviane',    lastName: 'MICHAUD', favory: ''  },
    {id: '4', firstName: 'Victor',   lastName: 'MICHAUD', job: 'Etudiant', image: '', favory: 'Half'},
    {id: '5', firstName: 'Lucas', lastName: 'MICHAUD', favory: ''},
    {id: '6', firstName: 'Emmanuelle', lastName: 'MICHAUD', job: 'Chargée de mission', favory: '', phone: '0633333333', image:'assets/image/plus.png'}
  ]
  private allReadyCharged: string = 'false';
  
  constructor() { }
  // Preferences get
  private getValue = async () => { 
    const { value } = await Preferences.get({key: 'chargement'});
    if (value == null) {
      this.setValue();
      this.allReadyCharged = 'false';
    } else {
      this.allReadyCharged = 'true';
    }
  }
  // Preferences set
  private setValue =  async () => { 
      await Preferences.set({
      key: 'chargement',
      value: 'true',
    });
  }


  getAll():Personne[]{
      return this.mockPersonne;
  }

  setAll(personnes: Personne[]){
    this.mockPersonne = personnes;
  }

  setCurent(personne: Personne){
    this.currentPersonne = personne;
  }
  
  getCurrent():Personne {
    return this.currentPersonne;
  }

}
export interface Personne {
  id: string;
  firstName: string;
  lastName: string;
  phone?: string;
  job?: string;
  image?: string;
  favory?: 'Favory' | 'Half' | '';
  position?: number;
}


