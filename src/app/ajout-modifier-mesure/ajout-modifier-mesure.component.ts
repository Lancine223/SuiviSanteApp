import { Component, OnInit, numberAttribute, Inject } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Mesure } from '../mesure';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuiviSanteServiceService } from '../suivi-sante-service.service';

import { Router } from '@angular/router';
import { generate } from 'rxjs';
import Swal from 'sweetalert2'; 
import { _isNumberValue } from '@angular/cdk/coercion';
// import { formatDate, getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-ajout-modifier-mesure',
  templateUrl: './ajout-modifier-mesure.component.html',
  styleUrls: ['./ajout-modifier-mesure.component.css']

})
export class AjoutModifierMesureComponent implements OnInit {
  mesureForm: FormGroup;
  mesures: Mesure[] = [];
  lastUsedId: number=0; // Déclarez lastUsedId ici
  dt: any;
  champsTouche: { [champ: string]: boolean } = {};
  
  

  constructor(
    private formBuilder: FormBuilder, private _dialog: MatDialog, private suiviSanteService: SuiviSanteServiceService, private router: Router,@Inject(MAT_DIALOG_DATA) public data: Mesure[] | any
  ) {
  
    this.mesureForm = this.formBuilder.group({
      id:'',
      NomComplet: ['', Validators.required ],
      date: ['', Validators.required],
      poids:  ['',[ Validators.required, this.validateChamp('poids')]],
      taille: ['',[ Validators.required, this.validateChamp('taille')]],
      pressionArterielle: '',
      pouls: ['',[ Validators.required, this.validateChamp('pouls')]],
      tsystolique: ['',[ Validators.required, this.validateChamp('tsystolique')]],
      tdiastolique: ['',[ Validators.required, this.validateChamp('tdiastolique')]],
      imc: ''
     
    });
  }

  
  ngOnInit(): void {
    
    this.mesureForm.patchValue(this.data);
    this.mesureForm = this.formBuilder.group({
      id:'',
      NomComplet: ['', Validators.required ],
      date: ['', Validators.required],
      poids:  ['',[ Validators.required, this.validateChamp('poids')]],
      taille: ['',[ Validators.required, this.validateChamp('taille')]],
      pressionArterielle: '',
      pouls: ['',[ Validators.required, this.validateChamp('pouls')]],
      tsystolique: ['',[ Validators.required, this.validateChamp('tsystolique')]],
      tdiastolique: ['',[ Validators.required, this.validateChamp('tdiastolique')]],
      imc: ''
     
    });
  }
  validateChamp(champ: string): Validators {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const champValue = control.value;

      if (isNaN(champValue)) {
        return { 'nonNombre': true };
      }

      // Autorisez un, deux ou trois chiffres
    if (champValue < 1 || champValue > 999) {
      return { 'longueurIncorrecte': true };
    }

      return null;
    };
  }
  

verifierChamp(champ: string) {
  this.champsTouche[champ] = true;
}


      onSubmit() {
        if (this.mesureForm.valid) {
          const mesure = this.mesureForm.value;
          
      
          if (this.data) {
            // console.log("la date de mesure :"+mesure.date);
            // this.dt=formatDate(new Date(),'dd/MM/yyyy', 'fr');
            // mesure.date=formatDate(mesure.date,'dd/MM/yyyy', 'fr');
            this.dt=new Date().getTime();
            const valeur =new Date(mesure.date).getTime();
            // if(mesure.date !== this.dt)
            if(valeur > this.dt){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: "La date est dans le future ! ",   
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
            if(mesure.taille < 30 || mesure.taille >250){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'La taille doit être compris entre 30 à 250 cm ! ',   
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
            if(mesure.poids < 1 || mesure.poids > 300){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'Le poids doit être compris entre 1 à 300 kg ! ',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
            if(mesure.tsystolique < 1 || mesure.tsystolique > 600){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'La Tension Systolique doit être compris entre 1 à 600 mmkg ! ',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
            if(mesure.tdiastolique < 1 || mesure.tdiastolique > 600){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'La Tension Diastolique doit être compris entre 1 à 600 mmkg ! ',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
            if(mesure.pouls < 1 || mesure.pouls > 300 ){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'Le pouls doit être compris entre 1 à 300 fois par minute! ',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
          
          
            if (valeur <= this.dt && mesure.poids >=1 && mesure.poids <=300 && mesure.taille >= 30 && mesure.taille <= 250 && mesure.pouls >= 1 && mesure.pouls <=300 && mesure.tsystolique >= 1 && mesure.tsystolique <=600 && mesure.tdiastolique >= 1 && mesure.tdiastolique <=600) {
               
            this.suiviSanteService
            .modifyMeasurement(this.data.id, this.mesureForm.value);
            this.mesureForm.reset();
            this.champsTouche = {};
            // Émettez un événement pour indiquer que les données ont été ajoutées
            this.suiviSanteService.triggerUpdate();

            Swal.fire('Merci !...', 'Mesure Modifier avec succès!', 'success')
            this.router.navigate(['/','historique']);
              }
          } else {
            
          // this.dt=formatDate(new Date(),'dd/MM/yyyy', 'fr');
          // mesure.date=formatDate(mesure.date,'dd/MM/yyyy', 'fr');
            // console.log("la date de mesure :"+mesure.date+"new date :"+ this.dt);
            this.dt=new Date().getTime();
            const valeur =new Date(mesure.date).getTime();
            

            

            if(valeur > this.dt) {
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: "La date est dans le future ! ",  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
            if(mesure.taille < 30 || mesure.taille >250){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'La taille doit être compris entre 30 à 250 cm ! ',   
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
            if(mesure.poids < 1 || mesure.poids > 300){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'Le poids doit être compris entre 1 à 300 kg ! ',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
            if(mesure.tsystolique < 1 || mesure.tsystolique > 600){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'La Tension Systolique doit être compris entre 1 à 600 mmkg ! ',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
            if(mesure.tdiastolique < 1 || mesure.tdiastolique > 600){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'La Tension Diastolique doit être compris entre 1 à 600 mmkg ! ',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
            if(mesure.pouls < 1 || mesure.pouls > 300 ){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'Le pouls doit être compris entre 1 à 300 fois par minute! ',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
          
            if (valeur <= this.dt && mesure.poids >=1 && mesure.poids <=300 && mesure.taille >= 30 && mesure.taille <= 250 && mesure.pouls >= 1 && mesure.pouls <=300 && mesure.tsystolique >= 1 && mesure.tsystolique <=600 && mesure.tdiastolique >= 1 && mesure.tdiastolique <=600) {
             
               
              this.suiviSanteService.ajouterMesure(mesure);
              this.champsTouche = {};
              
              this.mesureForm.reset();
              // Émettez un événement pour indiquer que les données ont été ajoutées
              this.suiviSanteService.triggerUpdate();
              Swal.fire('Merci !...', 'Mesure Enregistrer avec succès!', 'success')
              
             
              
              }
              // this.suiviSanteService.ajouterMesure(mesure);
              // this.mesureForm.reset();
              // // Émettez un événement pour indiquer que les données ont été ajoutées
              // this.suiviSanteService.triggerUpdate();
              // Swal.fire('Merci !...', 'Mesure Enregistrer avec succès!', 'success')     
              
          }
        }
      }
      //ESSATIONS
    }
    
  

  

  