import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AjoutModifierMesureComponent } from './ajout-modifier-mesure/ajout-modifier-mesure.component';
import { HistoriqueMesuresComponent } from './historique-mesures/historique-mesures.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AjoutModifierMesureComponent,
    HistoriqueMesuresComponent,
    TableauBordComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    NgApexchartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
