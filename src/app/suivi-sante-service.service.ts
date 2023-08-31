import { Injectable } from '@angular/core';
import { Mesure } from './mesure';
import { Observable, Subject  } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SuiviSanteServiceService {
  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  constructor(){}

  private mesures: Mesure[] = [];
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  

  triggerUpdate() {
    this.updateEvent.next();
  }


  getMesures(): Mesure[] {
   // this.mesures.push(new Mesure(1,"Doucoure Mady",new Date(),23,23,"23",23));
    return this.mesures;
  }
  

  ajouterMesure(mesure: Mesure) {
    
    // mesure.id=this.mesures.length+1;
    const convert= mesure.taille/100;
    const produitTaille= convert*convert;
    const lastaa=mesure.poids/produitTaille
    // Arrondir l'IMC à une décimale
    const imcArrondi: number = parseFloat(lastaa.toFixed(1));
    mesure.imc=imcArrondi;
    this.mesures.push(mesure);
    //
    //
    
    //
   
  }
  
  // Les autres méthodes (modifierMesure, supprimerMesure, etc.) restent inchangées

  // Méthode pour mettre à jour une mesure existante
  modifyMeasurement(id: number, mesure: Mesure): void {
    // Recherchez l'indice de la mesure à mettre à jour dans la liste
    const index = this.mesures.findIndex((meas) => meas.id === id);

    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) {
      // mesure.id=this.mesures.length+1;
      const convert= mesure.taille/100;
      const produitTaille= convert*convert;
      const lastaa=mesure.poids/produitTaille
      // Arrondir l'IMC à une décimale
      const imcArrondi: number = parseFloat(lastaa.toFixed(1));
      mesure.imc=imcArrondi;
      const dateauj=new Date();
      const datefuture = dateauj.getDate()+1;
      if(mesure.date.toLocaleString()>=datefuture.toLocaleString()) {
        console.log("la date n'est pas correct")

      }
      this.mesures[index] = mesure;
    }
  }

}
