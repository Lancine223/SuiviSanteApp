import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import Swal from 'sweetalert2'; 
import { AjoutModifierMesureComponent } from '../ajout-modifier-mesure/ajout-modifier-mesure.component';

@Component({
  selector: 'app-historique-mesures',
  templateUrl: './historique-mesures.component.html',
  styleUrls: ['./historique-mesures.component.css'],
})
export class HistoriqueMesuresComponent implements OnInit{

  constructor(private _dialog: MatDialog){

  }
  ngOnInit(){  
    
  }

  OpenDialog(){
    this._dialog.open(AjoutModifierMesureComponent);
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