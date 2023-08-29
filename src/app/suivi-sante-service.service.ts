import { Injectable } from '@angular/core';
import { Mesure } from './mesure';
import { BehaviorSubject, Subject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuiviSanteServiceService {
  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }

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
    const convert= mesure.taille/100;
    const produitTaille= convert*convert;
    const lastaa=mesure.poids/produitTaille
    // Arrondir l'IMC à une décimale
    const imcArrondi: number = parseFloat(lastaa.toFixed(1));
    mesure.imc=imcArrondi;
    this.mesures.push(mesure);
    console.log(this.mesures.length);
    console.log(mesure);
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
