import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "aboutus-intiwatana-webpage",
    templateUrl: "./aboutus.component.html",
    styleUrls: ["./aboutus.component.css"]
})
export class AboutusIntiWebPageComponent {

    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

}