import { Component, OnInit, numberAttribute, Inject } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, MaxValidator, Validators } from '@angular/forms';
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
  
  

  constructor(
    private formBuilder: FormBuilder, private _dialog: MatDialog, private suiviSanteService: SuiviSanteServiceService, private router: Router,@Inject(MAT_DIALOG_DATA) public data: Mesure[] | any
  ) {
  
    this.mesureForm = this.formBuilder.group({
      id:'',
      NomComplet: ['', Validators.required ],
      date: ['', Validators.required],
      poids:  ['', Validators.required],
      taille: ['', Validators.required],
      pressionArterielle: ['', Validators.required],
      pouls: ['', Validators.required],
      imc: ''
     
    });
  }
  ngOnInit(): void {
    
    this.mesureForm.patchValue(this.data);
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
            }if(mesure.taille < 30 ){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'La taille doit être superieur ou égale à 30 cm!',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }if(mesure.poids < 1 ){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'Le poids doit être superieur à 0!',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }if(mesure.pressionArterielle < 1 ){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'La pression arterielle doit être superieur à 0!',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }if(mesure.pouls < 1 ){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'Le pouls doit être superieur à 0!',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
          
            if (valeur <= this.dt && mesure.poids >=1 && mesure.taille >= 30 && mesure.pouls >= 1) {
               
            this.suiviSanteService
            .modifyMeasurement(this.data.id, this.mesureForm.value);
            this.mesureForm.reset();
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
            }if(mesure.taille < 30 ){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'La taille doit être superieur ou égale à 30 cm !',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }if(mesure.poids < 1 ){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'Le poids doit être superieur à 0!',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }if(mesure.pressionArterielle < 1 ){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'La pression arterielle doit être superieur à 0!',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }if(mesure.pouls < 1 ){
              Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'Le pouls doit être superieur à 0!',  
                
                // footer: '<a href>Why do I have this issue?</a>'  
              }) 
            }
          
            if (valeur <= this.dt && mesure.poids >=1 && mesure.taille >= 20 && mesure.pouls >= 1) {
              console.log('Mesure :'+mesure.taille.length)
               
              this.suiviSanteService.ajouterMesure(mesure);
              
              this.mesureForm.reset();
              // Émettez un événement pour indiquer que les données ont été ajoutées
              this.suiviSanteService.triggerUpdate();
              Swal.fire('Merci !...', 'Mesure Enregistrer avec succès!', 'success')
              
              this.router.navigate(['/', 'historique']);
              
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
    
  

  

  