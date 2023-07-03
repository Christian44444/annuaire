import { Injectable } from '@angular/core';

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
    {id: '5', firstName: 'Emmanuelle', lastName: 'MICHAUD', job: 'Chargée de mission', favory: '', phone: '0635321400'}
  ]
  constructor() { }

  getAll():Personne[]{
    return this.mockPersonne;
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


