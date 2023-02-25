import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { EmailService } from '../DataAccess/email.service';
// import { GenerarCaptchaService } from '../DataAccess/generar-captcha.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  @Input () hotel: string;


  datos:FormGroup;
  capcha64: SafeResourceUrl;
  public showLoadingSpinner: boolean = false;

  constructor(private translate: TranslateService, private genCaptcha: EmailService, private domSanitizer: DomSanitizer) { 
    this.datos = new FormGroup({
        email: new FormControl(),
        name: new FormControl(),
        asunto: new FormControl(),
        mensaje: new FormControl(),
    })

    this.procesarConsulta()
  }

  ngOnInit(): void {
  }

  setLanguage(lang: string){
    this.translate.use(lang);
  }

  mostrarMensaje(hotel:string) {
    console.log(hotel)
  }



    procesarConsulta() {
        this.showLoadingSpinner = true;
        this.genCaptcha.obtenerCaptcha().subscribe(
        data => {
            this.capcha64 = this.domSanitizer.bypassSecurityTrustResourceUrl("data:image/bmd;base64, " + data );
            console.log(`este es:`, this.capcha64)
        },
        error => {
            this.showErrorConexionMessage();
        },
        () => {                 
            this.showLoadingSpinner = false;                              
        } );
    }

    showErrorConexionMessage(){

    }

    refreshCaptcha() {
        this.procesarConsulta()
    }



//   obtenerCaptcha() {
//     this.codCaptcha.getImagenCaptcha()
//   }

}
