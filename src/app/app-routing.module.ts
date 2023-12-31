import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutModifierMesureComponent } from './ajout-modifier-mesure/ajout-modifier-mesure.component';
import { HistoriqueMesuresComponent } from './historique-mesures/historique-mesures.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { path: '', component: AccueilComponent, },
  { path: 'accueil', component: AccueilComponent, },
 { path: 'historique', component: HistoriqueMesuresComponent },
 { path: 'tableaub', component: TableauBordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
