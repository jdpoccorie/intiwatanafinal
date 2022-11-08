import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Output } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "header-intiwatana-webpage",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderIntiWatanaWebPageComponent {

    @Output() dataEvent = new EventEmitter();
    
    constructor(private translate: TranslateService, @Inject(DOCUMENT) private document: Document){

    }
    setLanguage(lang: string){
        this.translate.use(lang);
        this.dataEvent.emit(lang); 
    }
    home(){
        this.document.location.href = '/#/home';
        //window.location.reload();
    }
    hotel(){
        this.document.location.href = '/#/hotel';
        window.location.reload();
    }
    aboutus(){
        this.document.location.href = '/#/aboutus';
        //window.location.reload();
    }
    rooms(){
        this.document.location.href = '/#/rooms';
        //window.location.reload();
    }
    gallery(){
        this.document.location.href = '/#/gallery';
        //window.location.reload();
    }
    contact(){
        this.document.location.href = '/#/contact';
        window.location.reload();
    }
    movePage(el: HTMLElement){
        el.scrollIntoView();
    }

}