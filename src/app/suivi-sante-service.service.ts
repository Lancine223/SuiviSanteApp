import { Injectable } from '@angular/core';
import { Mesure } from './mesure';
import { BehaviorSubject, Subject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuiviSanteServiceService {

  private mesures: Mesure[] = [];
  private mesureSubject = new BehaviorSubject<Mesure[]>([]);
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  

  triggerUpdate() {
    this.updateEvent.next();
  }


  getMesures(): Mesure[] {
   // this.mesures.push(new Mesure(1,"Doucoure Mady",new Date(),23,23,"23",23));
    return this.mesures;
  }
  getMesuresObservable() {
    return this.mesureSubject.asObservable();
  }
  // Cette méthode notifie les observateurs qu'une nouvelle mesure a été ajoutée
  notifyMesureAdded() {
    this.mesureSubject.next(this.mesures);
  }

  ajouterMesure(mesure: Mesure) {
    // Générez un nouvel ID pour la mesure (vous pouvez utiliser une logique plus complexe si nécessaire)
    //mesure.id = this.generateNewId();
    mesure.id=this.mesures.length+1;
    this.mesures.push(mesure);
    console.log(this.mesures.length);
     // Mise à jour de la liste des mesures et notification aux observateurs
    this.mesureSubject.next(this.mesures);
  }
  
  // Les autres méthodes (modifierMesure, supprimerMesure, etc.) restent inchangées

  // Méthode pour mettre à jour une mesure existante
  modifierMesure(mesure: Mesure) {
    const index = this.mesures.findIndex(m => m.id === mesure.id);
    if (index !== -1) {
      this.mesures[index] = mesure;
    }
  }

  // Méthode pour supprimer une mesure
  supprimerMesure(id: number) {
    this.mesures = this.mesures.filter(m => m.id !== id);
  }

  

}
