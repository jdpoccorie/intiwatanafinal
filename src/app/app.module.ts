import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { HabitacionesComponent } from './Habitaciones/habitaciones.component';
import { HabitacionesRepository } from './DataAccess/habitaciones.repository';
import { HttpClientModule } from "@angular/common/http";
import { TotalSeleccionHabPipe } from './totalSeleccionHab.pipe';
import { TotalHabitacionesPipe } from './totalHabitaciones.pipe';
import { TotalHuepedesHabPipe } from './totalHuespedesHab.pipe';
import { CheckOutComponent } from './CheckOut/checkout.component';
import { CheckOutRepository } from './DataAccess/checkout.repository';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import {A11yModule} from '@angular/cdk/a11y';

import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { ProcessDialogComponent } from './CheckOut/process-dialog.component';
import { DetalleOrdenComponent } from './Ordenes/detalle-orden.component';
import { DisponibilidadDialogComponent } from './Habitaciones/disponibilidad-dialog.component';
import {NgsRevealModule} from 'ngx-scrollreveal';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {HttpClient} from '@angular/common/http';
import { HeaderPagesComponent } from './header-pages.component';
import { DatePipe } from '@angular/common';
import { MonedaFormatoPipe } from './monedaFormato.pipe';
import { StoreFirstGuard } from './storeFirst.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HeaderIntiWatanaWebPageComponent } from './WebPageIntiwatana/header.component';
import { CarouselIntiWatanaWebPageComponent } from './WebPageIntiwatana/carousel.component';
import { Carousel1IntiWatanaWebPageComponent } from './WebPageIntiwatana/carousel-1.component';
import { Carousel2IntiWatanaWebPageComponent } from './WebPageIntiwatana/carousel-2.component';
import { HomeIntiWatanaWebPageComponent } from './WebPageIntiwatana/home.component';
import { MachupicchuIntiWatanaWebPageComponent } from './WebPageIntiwatana/machupicchu.component';
import { HotelIntiWatanaWebPageComponent } from './WebPageIntiwatana/hotel.component';
import { MotorIntiWatanaWebPageComponent } from './WebPageIntiwatana/motor.component';
import { FooterIntiWatanaWebPageComponent } from './WebPageIntiwatana/footer.component';
import { RoomsIntiWatanaWebPageComponent } from './WebPageIntiwatana/roons.component';
import { ContactIntiWebPageComponent } from './WebPageIntiwatana/contact.component';
import { GalleryIntiWebPageComponent } from './WebPageIntiwatana/gallery.component';
import { AboutusIntiWebPageComponent} from './WebPageIntiwatana/aboutus.component';
import { FormContactComponent } from './WebPageIntiwatana/form-contact.component';
import { VentanaModalComponent } from './WebPageIntiwatana/ventana-modal.component';



@NgModule({
  declarations: [
    AppComponent, HeaderPagesComponent, HeaderComponent, HabitacionesComponent, RoomsIntiWatanaWebPageComponent, AboutusIntiWebPageComponent, MachupicchuIntiWatanaWebPageComponent,
    TotalSeleccionHabPipe, TotalHabitacionesPipe, TotalHuepedesHabPipe, MonedaFormatoPipe, GalleryIntiWebPageComponent, HotelIntiWatanaWebPageComponent, Carousel2IntiWatanaWebPageComponent,
    CheckOutComponent, ProcessDialogComponent, DetalleOrdenComponent, DisponibilidadDialogComponent, ContactIntiWebPageComponent, CarouselIntiWatanaWebPageComponent,
    HeaderIntiWatanaWebPageComponent, HomeIntiWatanaWebPageComponent, MotorIntiWatanaWebPageComponent, FooterIntiWatanaWebPageComponent, Carousel1IntiWatanaWebPageComponent, FormContactComponent, VentanaModalComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    NgsRevealModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([
      { path: "home", component: HomeIntiWatanaWebPageComponent },
      { path: "machupicchu", component: MachupicchuIntiWatanaWebPageComponent },
      { path: "hotel", component: HotelIntiWatanaWebPageComponent },
      { path: "aboutus", component: AboutusIntiWebPageComponent },  
      { path: "rooms", component: RoomsIntiWatanaWebPageComponent },  
      { path: "gallery", component: GalleryIntiWebPageComponent }, 
      { path: "contact", component: ContactIntiWebPageComponent }, 
      { path: "booking/:checkIn/:checkOut/:nroPersonas", component: HabitacionesComponent }, 
      { path: "checkout", component: CheckOutComponent, canActivate: [StoreFirstGuard] },
      { path: "orden-detail", component: DetalleOrdenComponent, canActivate: [StoreFirstGuard] },
      { path: "**", redirectTo: "/home" }
      ], {useHash: true}),
    NgbModule      
  ],
  exports:  [
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [ 
    DatePipe, HabitacionesRepository, CheckOutRepository, StoreFirstGuard, MatDialog, {provide: MAT_DATE_LOCALE, useValue: 'es-PE'},
    
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
