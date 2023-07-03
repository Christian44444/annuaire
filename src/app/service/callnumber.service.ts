import { Injectable, inject } from '@angular/core';
import { CallNumber, CallNumberOriginal } from '@awesome-cordova-plugins/call-number';
import { Personne } from './personne.service';


@Injectable({
  providedIn: 'root'
})

/**
 * Service d'appel pour l'application:
 * Attention si appel sur personne.phone le n° pouvant être undefine il faut rajouter as string;
 * callNumber ne prenant pas de undefined
 */
export class CallnumberService {
  constructor() { }

  async launchCall(phone: string) {
    
    CallNumber.callNumber(phone, true)
      .then(res =>  console.log("launched OK!"))
      .catch(err => console.log("Error launch", err))
  }

}
