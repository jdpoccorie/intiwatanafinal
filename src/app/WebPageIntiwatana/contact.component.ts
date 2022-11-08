import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "contact-intiwatana-webpage",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"]
})
export class ContactIntiWebPageComponent {

    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }
}