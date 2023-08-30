import { NgModule , CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutModifierMesureComponent } from './ajout-modifier-mesure/ajout-modifier-mesure.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {TableauBordComponent} from "./tableau-bord/tableau-bord.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {HistoriqueMesuresComponent} from "./historique-mesures/historique-mesures.component";

@NgModule({
  declarations: [
    AppComponent,
    AjoutModifierMesureComponent,
    TableauBordComponent,
    AccueilComponent,
    HistoriqueMesuresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
