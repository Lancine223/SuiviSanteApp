import { Component, OnInit, AfterViewInit, ViewChild, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuiviSanteServiceService } from '../suivi-sante-service.service';
import { Mesure } from '../mesure';
import { MatIconButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
//TABLE
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

//TABLE
import Swal from 'sweetalert2'; 
import { AjoutModifierMesureComponent } from '../ajout-modifier-mesure/ajout-modifier-mesure.component';

@Component({
  selector: 'app-historique-mesures',
  templateUrl: './historique-mesures.component.html',
  styleUrls: ['./historique-mesures.component.css'],

  
})
export class HistoriqueMesuresComponent implements OnInit{

  
  mesures: Mesure[] = [];
  displayedColumns: string[] = ['id', 'NomComplet', 'date', 'poids', 'taille', 'pressionArterielle', 'pouls','action'];
  dataSource!: MatTableDataSource<Mesure>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private suiviSanteService: SuiviSanteServiceService){
    
  }

  // ajouterMesure(): void {
  //   this.suiviSanteService.addMesure(this.mesures);
  //    this.mesures = new Mesure(); // Réinitialiser le formulaire.
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
     

  ngOnInit(){  
    // Appel de la méthode du service pour récupérer les mesures
    this.mesures = this.suiviSanteService.getMesures();
    this.dataSource = new MatTableDataSource(this.mesures);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
    // Écoutez les mises à jour de la liste des mesures
    this.suiviSanteService.getMesuresObservable().subscribe(updatedMesures => {
    this.mesures = updatedMesures;
    
    });
// Abonnez-vous à l'événement de mise à jour
this.suiviSanteService.update$.subscribe(() => {
  // Mettez à jour vos données ici
  this.refreshData();
});   
}
private refreshData() {
  // Mettez à jour vos données (par exemple, récupérez à nouveau les mesures)
  // Appel de la méthode du service pour récupérer les mesures
  this.mesures = this.suiviSanteService.getMesures();
  this.dataSource = new MatTableDataSource(this.mesures);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  // Écoutez les mises à jour de la liste des mesures
  this.suiviSanteService.getMesuresObservable().subscribe(updatedMesures => {
  this.mesures = updatedMesures; });
}

  OpenDialog(){
    this._dialog.open(AjoutModifierMesureComponent);
  }
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AjoutModifierMesureComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.suiviSanteService.getMesures();
        }
      },
    });
  }

  deleteEmployee(id: number) {
    this.suiviSanteService.supprimerMesure(id);
  }

  simpleAlert(){  
    Swal.fire('Hello Angular');  
  }  
    
  alertWithSuccess(){  
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')  
  }  
  erroalert()  
  {  
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: 'Something went wrong!',  
      footer: '<a href>Why do I have this issue?</a>'  
    })  
  }  
  topend()  
  {  
    Swal.fire({  
      position: 'top-end',  
      icon: 'success',  
      title: 'Your work has been saved',  
      showConfirmButton: false,  
      timer: 1500  
    })  
  }  
  confirmBox(){  
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) {  
        Swal.fire(  
          'Deleted!',  
          'Your imaginary file has been deleted.',  
          'success'  
        )  
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Your imaginary file is safe :)',  
          'error'  
        )  
      }  
    })  
  }
}
  ///////TABLEAU
  
