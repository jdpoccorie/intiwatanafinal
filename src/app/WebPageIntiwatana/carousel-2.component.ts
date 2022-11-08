import { Component, EventEmitter, Inject, Output } from "@angular/core";
@Component({
    selector: "carousel-2-intiwatana-webpage",
    templateUrl: "./carousel-2.component.html",
    styleUrls: ["./carousel-2.component.css"]
})
export class Carousel2IntiWatanaWebPageComponent {
    @Output() dataEvent = new EventEmitter();

}