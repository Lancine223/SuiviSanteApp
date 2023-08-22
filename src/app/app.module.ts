import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauBordComponent } from './tableau-bord/tableau-bord.component';
import { HistoriqueMesuresComponent } from './historique-mesures/historique-mesures.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauBordComponent,
    HistoriqueMesuresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
