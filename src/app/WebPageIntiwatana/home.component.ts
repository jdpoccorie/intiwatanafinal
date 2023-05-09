import { Component, ElementRef, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo } from "../articulo";
import { VentanaModalComponent } from "./ventana-modal.component";

@Component({
    selector: "home-intiwatana-webpage",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeIntiWatanaWebPageComponent {


    constructor(private translate: TranslateService, public dialog: MatDialog){
        
    }

    ngOnInit() {
        this.abrirDialogo()
    }

    abrirDialogo() {
        const dialogo1 = this.dialog.open(VentanaModalComponent);
    
        dialogo1.afterClosed().subscribe(art => {});
      }

     
    
      

    setLanguage(lang: string){
        this.translate.use(lang);
    }

}