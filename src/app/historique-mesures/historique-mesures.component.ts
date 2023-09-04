import { Component,Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuiviSanteServiceService } from '../suivi-sante-service.service';
import { Mesure } from '../mesure';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


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
  listeData:any = [];
  displayedColumns: string[] = ['id', 'NomComplet', 'date', 'poids', 'taille', 'pressionArterielle', 'pouls', 'imc','action'];
  dataSource!: MatTableDataSource<Mesure>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  @Input() private colorgroupe: number[]=[];

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
   
// Abonnez-vous à l'événement de mise à jour
    this.suiviSanteService.update$.subscribe(() => {
    // Mettez à jour vos données ici
    this.refreshData();
    this.getColor();
    
});   
}
private refreshData() {
  // Mettez à jour vos données (par exemple, récupérez à nouveau les mesures)
  // Appel de la méthode du service pour récupérer les mesures
  this.mesures = this.suiviSanteService.getMesures();
  this.dataSource = new MatTableDataSource(this.mesures);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

getColor() {
    const aa = this.suiviSanteService.getMesures();
    
    aa.forEach((element: { imc: number}) => {
      // console.log(element.imc);
      const color = element.imc;
    if (color >= 18 && color <=25){
      return '#26B08D';

    }
    else if (color < 18){
      return 'orange';
    }else if
     (color > 25 && color < 30){
      return 'orange';
    }
    else if (color >= 30 && color < 35) {
      return 'orange';

    }
    else if (color >= 35 ){
      return 'red';
    }
    return '#26B08D';
    });
  
  
}
  OpenDialog(enterAnimationDuration: string, exitAnimationDuration: string){
    this._dialog.open(AjoutModifierMesureComponent,{enterAnimationDuration,
      exitAnimationDuration});
  }

  


  openEditForm(data: Mesure[], enterAnimationDuration: string, exitAnimationDuration: string) {
    
    const dialogRef = this._dialog.open(AjoutModifierMesureComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
      
    });

    
  }
  // remove(i:number):void {
  //   // this.mesures = this.mesures.filter((item, index) => index !== rowid);
  //   this.mesures.splice(i,1);
  //   this.dataSource = new MatTableDataSource(this.mesures);
  // }

    

  // simpleAlert(){  
  //   Swal.fire('Hello Angular');  
  // }  
    
  // alertWithSuccess(){  
  //   Swal.fire('Thank you...', 'You submitted succesfully!', 'success')  
  // }  
  // erroalert()  
  // {  
  //   Swal.fire({  
  //     icon: 'error',  
  //     title: 'Oops...',  
  //     text: 'Something went wrong!',  
  //     footer: '<a href>Why do I have this issue?</a>'  
  //   })  
  // }  
  // topend()  
  // {  
  //   Swal.fire({  
  //     position: 'top-end',  
  //     icon: 'success',  
  //     title: 'Your work has been saved',  
  //     showConfirmButton: false,  
  //     timer: 1500  
  //   })  
  // }  
  confirmBox(i: number){  
    Swal.fire({  
      title: 'Êtes-vous sûr de vouloir supprimer?',  
      text: 'Vous ne pourriez plus récupérer cette mesure!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Oui, supprimez-le !',  
      cancelButtonText: 'Non, garde-le'  
    }).then((result) => {  
      if (result.value) {  
        this.mesures.splice(i,1);
        this.dataSource = new MatTableDataSource(this.mesures);
        Swal.fire(  
          'Supprimer!',  
          'Cette mesure a été supprimer.',  
          'success'  
        )  
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Annuler',  
          'Votre mesure est en sécurité ',  
          'error'  
        )  
      }  
    })  
  }

}
  ///////TABLEAU
  
