import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutModifierMesureComponent } from '../ajout-modifier-mesure/ajout-modifier-mesure.component';

@Component({
  selector: 'app-historique-mesures',
  templateUrl: './historique-mesures.component.html',
  styleUrls: ['./historique-mesures.component.css']
})
export class HistoriqueMesuresComponent {

  constructor(private _dialog: MatDialog){

  }

  OpenDialog(){
    this._dialog.open(AjoutModifierMesureComponent);
  }

}
