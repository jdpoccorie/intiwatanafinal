import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "roons-suizo-webpage",
    templateUrl: "./roons.component.html",
    styleUrls: ["./roons.component.css"]
})
export class RoomsIntiWatanaWebPageComponent {
    
    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

}