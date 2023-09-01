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
    //////////////
    ////////////////////////////////COLOR////////
    if (mesure.imc <= 12 ){
      mesure.couleur=  'red';
      mesure.colImc= 'maigre';
    }
    
    if (mesure.imc >= 13 && mesure.imc <18){
      mesure.couleur= 'orange';
      mesure.colImc= 'maigre';

    }
    if (mesure.imc >= 18 && mesure.imc <= 25){
      mesure.couleur=  '#26B08D';
      mesure.colImc= 'normal';
    }
    if
     (mesure.imc > 25 && mesure.imc < 35){
      mesure.couleur=  'orange';
      mesure.colImc= 'sur-poids';
    }
    if (mesure.imc >= 35) {
      mesure.couleur=  'red';
      mesure.colImc= 'modéré';

    } if(mesure.imc >35){
      mesure.couleur=  'red';
      mesure.colImc= 'sevère';

    }
    ///////Pression Arterielle/////
    if (mesure.tsystolique < 80 && mesure.tdiastolique < 40){
      mesure.pressionArterielle= 'Très Optimal';
      mesure.couleurP= 'red';
    }else
    if (mesure.tsystolique < 120 && mesure.tdiastolique < 80){
      mesure.pressionArterielle= 'Optimal';
      mesure.couleurP= 'orange';
    }else
    if ( 120 <= mesure.tsystolique  && mesure.tsystolique <= 129 || mesure.tdiastolique >= 80 && mesure.tdiastolique <= 84) {
      mesure.pressionArterielle= 'Normal';
      mesure.couleurP= '#26B08D';
    }else
    if (mesure.tsystolique >= 130 && mesure.tsystolique <= 139 || mesure.tdiastolique >= 85 && mesure.tdiastolique <= 89) {
      mesure.pressionArterielle= 'Normal haute';
      mesure.couleurP= '#26B08D';
    }else
    if (mesure.tsystolique >= 140 && mesure.tsystolique <= 159 || mesure.tdiastolique >= 90 && mesure.tdiastolique <= 99) {
      mesure.pressionArterielle= 'Hypertension légère';
      mesure.couleurP= 'orange';
    }else 
    if (mesure.tsystolique >= 160 && mesure.tsystolique <= 179 || mesure.tdiastolique >= 100 && mesure.tdiastolique <= 109) {
      mesure.pressionArterielle= 'Hypertenstion modérée';
      mesure.couleurP= 'orange';
    }else 
    if (mesure.tsystolique >= 180 && mesure.tsystolique <= 209 || mesure.tdiastolique >= 110 && mesure.tdiastolique <= 119) {
      mesure.pressionArterielle= 'Hypertension sevère';
      mesure.couleurP= 'red';
    }else
    if (mesure.tsystolique > 129 || mesure.tdiastolique > 119) {
      mesure.pressionArterielle= 'Hypertension très sevère';
      mesure.couleurP= 'red';
    }else{
      mesure.pressionArterielle= 'Tension anormale';
      mesure.couleurP= 'red';
    }
    ////////////
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
      ////////////////////////////////COLORimc////////
    ////////////////////////////////COLOR////////
    if (mesure.imc <= 12 ){
      mesure.couleur=  'red';
      mesure.colImc= 'trop maigre';
    }
    
    if (mesure.imc >= 13 && mesure.imc <18){
      mesure.couleur= 'orange';
      mesure.colImc= 'maigre';

    }
    if (mesure.imc >= 18 && mesure.imc <= 25){
      mesure.couleur=  '#26B08D';
      mesure.colImc= 'normal';
    }
    if
     (mesure.imc > 25 && mesure.imc < 35){
      mesure.couleur=  'orange';
      mesure.colImc= 'sur-poids';
    }
    if (mesure.imc >= 35) {
      mesure.couleur=  'red';
      mesure.colImc= 'modéré';

    }
    if(mesure.imc >35){
      mesure.couleur=  'red';
      mesure.colImc= 'sevère';

    }
   ////////////////////////////////////////////////////////////////////////////////////////////////
      ///////Pression Arterielle/////
    if (mesure.tsystolique < 80 && mesure.tdiastolique < 40){
      mesure.pressionArterielle= 'Très Optimal';
      mesure.couleurP= 'red';
    }else
    if (mesure.tsystolique < 120 && mesure.tdiastolique < 80){
      mesure.pressionArterielle= 'Optimal';
      mesure.couleurP= 'orange';
    }else
    if ( 120 <= mesure.tsystolique  && mesure.tsystolique <= 129 || mesure.tdiastolique >= 80 && mesure.tdiastolique <= 84) {
      mesure.pressionArterielle= 'Normal';
      mesure.couleurP= '#26B08D';
    }else
    if (mesure.tsystolique >= 130 && mesure.tsystolique <= 139 || mesure.tdiastolique >= 85 && mesure.tdiastolique <= 89) {
      mesure.pressionArterielle= 'Normal haute';
      mesure.couleurP= '#26B08D';
    }else
    if (mesure.tsystolique >= 140 && mesure.tsystolique <= 159 || mesure.tdiastolique >= 90 && mesure.tdiastolique <= 99) {
      mesure.pressionArterielle= 'Hypertension légère';
      mesure.couleurP= 'orange';
    }else 
    if (mesure.tsystolique >= 160 && mesure.tsystolique <= 179 || mesure.tdiastolique >= 100 && mesure.tdiastolique <= 109) {
      mesure.pressionArterielle= 'Hypertenstion modérée';
      mesure.couleurP= 'orange';
    }else 
    if (mesure.tsystolique >= 180 && mesure.tsystolique <= 209 || mesure.tdiastolique >= 110 && mesure.tdiastolique <= 119) {
      mesure.pressionArterielle= 'Hypertension sevère';
      mesure.couleurP= 'red';
    }else
    if (mesure.tsystolique > 129 || mesure.tdiastolique > 119) {
      mesure.pressionArterielle= 'Hypertension très sevère';
      mesure.couleurP= 'red';
    }else{
      mesure.pressionArterielle= 'Tension anormale';
      mesure.couleurP= 'red';
    }
    ////////////
      const dateauj=new Date();
      const datefuture = dateauj.getDate()+1;
      if(mesure.date.toLocaleString()>=datefuture.toLocaleString()) {
        console.log("la date n'est pas correct")

      }
      this.mesures[index] = mesure;
    }
  }

}
