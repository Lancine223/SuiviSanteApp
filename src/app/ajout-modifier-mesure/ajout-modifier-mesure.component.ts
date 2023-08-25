import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { Mesure } from '../mesure';

@Component({
  selector: 'app-ajout-modifier-mesure',
  templateUrl: './ajout-modifier-mesure.component.html',
  styleUrls: ['./ajout-modifier-mesure.component.css']

})
export class AjoutModifierMesureComponent {
  empform!: FormGroup;
  mesure: Mesure = new Mesure;

  constructor(private _fb: FormBuilder){
    this.empform = this._fb.group(this.mesure);

  }
  onFormsubmit(){
    if(this.empform.valid){
      console.log(this.empform.value);
    }

  }

}
