import { Component, OnInit, numberAttribute } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';
import { Mesure } from '../mesure';
import { MatDialog } from '@angular/material/dialog';
import { SuiviSanteServiceService } from '../suivi-sante-service.service';
import { Router } from '@angular/router';
import { generate } from 'rxjs';

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
    private formBuilder: FormBuilder,
    private suiviSanteService: SuiviSanteServiceService, private router: Router
  ) {
  
    this.mesureForm = this.formBuilder.group({
      id:[this.lastUsedId, Validators.required ],
      NomComplet: ['', Validators.required ],
      date: new Date(),
      poids:  [numberAttribute, Validators.required],
      taille: [numberAttribute, Validators.required],
      pressionArterielle: ['', Validators.required],
      pouls: [numberAttribute, Validators.required],
     
    });
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.mesureForm.valid) {
       const mesure = this.mesureForm.value;
       this.lastUsedId = 1;
       mesure.id = this.lastUsedId;
       console.log(mesure);
      

      // const nouvelleMesure: Mesure = this.mesureForm.value;
    

    // Incrémentation de l'ID
      // nouvelleMesure.id = this.lastUsedId + 1;
      // Enregistrez la mesure
      // this.suiviSanteService.ajouterMesure(nouvelleMesure);

    // Mettez à jour le dernier ID utilisé
      // this.lastUsedId = nouvelleMesure.id;
      this.suiviSanteService.ajouterMesure(mesure);
      this.mesureForm.reset();
      // Mettez à jour la liste des mesures dans le composant HistoriqueMesures
      this.suiviSanteService.notifyMesureAdded(); // Vous devez implémenter cette méthode dans SuiviSanteService
      // Émettez un événement pour indiquer que les données ont été ajoutées
      this.suiviSanteService.triggerUpdate();
      this.router.navigate(['/historique']);
      // Écoutez les mises à jour de la liste des mesures
      this.mesures = this.suiviSanteService.getMesures();
      this.suiviSanteService.getMesuresObservable().subscribe(updatedMesures => {
      this.mesures = updatedMesures;
      
    });
  }}
  autGenerate(lastUsedId: number){
    this.lastUsedId = this.lastUsedId + 1;
    console.log('La valeur de id'+this.lastUsedId);

  }  
  //la liste de
  // empform!: FormGroup;
  // formulaireMesure: FormGroup;
  // constructor(private formBuilder: FormBuilder) {
  //   this.formulaireMesure = this.formBuilder.group({
  //   date: ['', Validators.required],
  //   poids: ['', [Validators.required, Validators.min(0.1)]],
  //   taille: ['', [Validators.required, Validators.min(1)]],
  //   pressionArterielle: ['', Validators.required],
  //   pouls: ['', [Validators.required, Validators.min(1)]]
  //   });
  //   }
    // this.empForm = this._fb.group({Mesure});
    // ajouterMesure(): void {
    // if (this.formulaireMesure.valid) {
    // // Récupérez les valeurs du formulaire et ajoutez une nouvelle mesure ici.
    // const nouvelleMesure = this.formulaireMesure.value;
    // // Appelez le service pour ajouter la mesure (à implémenter).
    // // Réinitialisez le formulaire après avoir ajouté la mesure.
    // this.formulaireMesure.reset();
    // }
    // }
  

  // constructor(private _fb: FormBuilder){
  //   this.empform = this._fb.group(this.mesure);

  // }
  // onFormsubmit(){
  //   if(this.empform.valid){
  //     console.log(this.empform.value);
  //   }

  // }

}
  