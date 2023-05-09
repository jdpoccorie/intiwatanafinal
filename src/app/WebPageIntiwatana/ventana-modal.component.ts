import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-ventana-modal',
  templateUrl: './ventana-modal.component.html',
  styleUrls: ['./ventana-modal.component.css']
})
export class VentanaModalComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<VentanaModalComponent>) {}
    
      ngOnInit() {

      }
    
      cerrar() {
        this.dialogRef.close();
      }

}
