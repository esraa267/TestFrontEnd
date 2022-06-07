import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/Layout/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './service/Interceptor/interceptor.service';
import { ColorDirective } from './Directives/color/color.directive';
import { MatTabsModule } from '@angular/material/tabs';
import { RatingModule } from 'ngx-bootstrap/rating';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { ResturantComponent } from './components/resturant/resturant.component';
import { ResturantDetailsComponent } from './components/resturant/resturant-details/resturant-details.component';
import { MenuComponent } from './components/resturant/menu/menu.component';
import { ExtraComponent } from './components/resturant/extra/extra.component';
import { OffersComponent } from './components/resturant/offers/offers.component';
import { SpinnerComponent } from './components/Layout/spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorDirective,
    NavbarComponent,
    ResturantComponent,
    ResturantDetailsComponent,
    MenuComponent,
    ExtraComponent,
    OffersComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    RatingModule.forRoot(),
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
