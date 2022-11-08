import { Component, EventEmitter, Inject, Output } from "@angular/core";
@Component({
    selector: "carousel-1-intiwatana-webpage",
    templateUrl: "./carousel-1.component.html",
    styleUrls: ["./carousel-1.component.css"]
})
export class Carousel1IntiWatanaWebPageComponent {
    @Output() dataEvent = new EventEmitter();

}