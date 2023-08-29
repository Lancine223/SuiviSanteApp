import { Component, OnInit, numberAttribute, Inject } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, ReactiveFormsModule , Validators } from '@angular/forms';
import { Mesure } from '../mesure';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SuiviSanteServiceService } from '../suivi-sante-service.service';

import { Router } from '@angular/router';
import { generate } from 'rxjs';
import Swal from 'sweetalert2'; 
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-ajout-modifier-mesure',
  templateUrl: './ajout-modifier-mesure.component.html',
  styleUrls: ['./ajout-modifier-mesure.component.css']

})
export class AjoutModifierMesureComponent implements OnInit {
  mesureForm: FormGroup;
  mesures: Mesure[] = [];
  lastUsedId: number=0; // Déclarez lastUsedId ici
  
  
  

  constructor(
    private formBuilder: FormBuilder, private _dialog: MatDialog, private suiviSanteService: SuiviSanteServiceService, private router: Router,@Inject(MAT_DIALOG_DATA) public data: Mesure[] | any
  ) {
  
    this.mesureForm = this.formBuilder.group({
      id:'',
      NomComplet: ['', Validators.required ],
      date: ['', Validators.required],
      poids:  [numberAttribute, Validators.required],
      taille: [numberAttribute, Validators.required],
      pressionArterielle: [numberAttribute, Validators.required],
      pouls: [numberAttribute, Validators.required],
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
            this.suiviSanteService
              .modifyMeasurement(this.data.id, this.mesureForm.value);
              this.mesureForm.reset();
              // Émettez un événement pour indiquer que les données ont été ajoutées
              this.suiviSanteService.triggerUpdate();
              Swal.fire('Merci !...', 'Mesure Modifier avec succès!', 'success')
          } else {
            this.suiviSanteService.ajouterMesure(mesure);
            this.mesureForm.reset();
            // Émettez un événement pour indiquer que les données ont été ajoutées
            this.suiviSanteService.triggerUpdate();
            Swal.fire('Merci !...', 'Mesure Enregistrer avec succès!', 'success')
          }
        }
      }
      //ESSATIONS




    
    }
    
  

  

  