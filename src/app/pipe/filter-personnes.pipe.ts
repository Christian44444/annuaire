import { Pipe, PipeTransform } from '@angular/core';
import { Personne } from '../service/personne.service';

// Attention au standalone car il n'y a pas de gestion de modules dans notre version standalone
@Pipe({
  name: 'filterPersonnes',
  standalone: true
})

/**
 * Filtre sur les champs de personnes: Prénom Nom Profession et N° de tel
 */
export class FilterPersonnesPipe implements PipeTransform {

  transform(personnes: Personne[], value: string): Personne[] {
    if(!value) {
      return personnes;
    } else {
      return personnes.filter(p => (p.firstName.toLowerCase() + " " 
                                  + p.lastName.toLowerCase() + " " 
                                  + p.job?.toLowerCase() + " "
                                  + p.phone?.toLowerCase()).indexOf(value.toLowerCase())!= -1);
    }
  }

}
