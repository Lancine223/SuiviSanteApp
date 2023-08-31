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
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import {ReactiveFormsModule} from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);


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
    MatSortModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [{provide: localeFr, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
