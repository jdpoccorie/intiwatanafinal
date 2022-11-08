import { Component, EventEmitter, Inject, Output } from "@angular/core";
@Component({
    selector: "carousel-intiwatana-webpage",
    templateUrl: "./carousel.component.html",
    styleUrls: ["./carousel.component.css"]
})
export class CarouselIntiWatanaWebPageComponent {
    @Output() dataEvent = new EventEmitter();

}