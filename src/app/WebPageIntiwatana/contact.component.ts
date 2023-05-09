import { Component, ElementRef, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "contact-intiwatana-webpage",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"]
})
export class ContactIntiWebPageComponent {

    @ViewChild("sectionSubscribe", { static: true }) sectionSubscribeDiv: ElementRef;

    constructor(private translate: TranslateService){
        // this.scrollToDiv();
    }

    ngOnInit() {
        // scroll(#myTarget)
        // this.scrollToDiv();
        console.log(document.getElementById('scroll'))
        document.getElementById('scroll').scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    scrollToDiv() {
        console.log(this.sectionSubscribeDiv)
        this.sectionSubscribeDiv.nativeElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
    }


    setLanguage(lang: string){
        this.translate.use(lang);
    }
}