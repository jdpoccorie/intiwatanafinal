import { Component, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { FiltroConsultaHab } from "../Model/filtro-consulta-hab.model";

@Component({
    selector: "motor-intiwatana-webpage",
    templateUrl: "./motor.component.html",
    styleUrls: ["./motor.component.css"]
})
export class MotorIntiWatanaWebPageComponent {

    public minStartDate: Date;
    public maxStartDate: Date;
  
    public minEndDate: Date;
    public maxEndDate: Date;

    public checkIn: string;
    public checkOut: string;
    public nroPersonas: string;
    public urlReservas: string;

    public filtro: FiltroConsultaHab; 

    constructor(private translate: TranslateService, private router: Router){
        this.filtro = new FiltroConsultaHab();
        this.filtro.nroPersonas = 1;
    
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
                return false;
              };    
        
        const currentYear = new Date().getFullYear();
        this.minStartDate = new Date();
        this.maxStartDate = new Date(currentYear + 1, 11, 31);
    }

    actualizarFecha(event: MatDatepickerInputEvent<Date>) {
        this.minEndDate = event.value;
        this.maxEndDate = new Date(event.value.getFullYear() + 1, 11, 31);
      }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

    consultaFechas(form: NgForm) {
        this.checkIn = this.filtro.startDate;
        this.checkOut = this.filtro.endDate;
        this.nroPersonas = "1";     
        
        if(this.checkIn != undefined && this.checkOut != undefined){
          this.urlReservas = `/booking/${this.checkIn}/${this.checkOut}/${this.nroPersonas}`;
          this.router.navigate([this.urlReservas]);
        }
      }

}