import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "footer-intiwatana-webpage",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"]
})
export class FooterIntiWatanaWebPageComponent {

    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

}