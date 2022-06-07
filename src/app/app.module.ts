import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/Layout/navbar/navbar.component';
import { ResturantComponent } from './components/resturant/resturant.component';
import { ResturantDetailsComponent } from './components/resturant/resturant-details/resturant-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './service/Interceptor/interceptor.service';
import { MenuComponent } from './components/resturant/menu/menu.component';
import { ExtraComponent } from './components/resturant/extra/extra.component';
import { OffersComponent } from './components/resturant/offers/offers.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ColorDirective } from './Directives/color/color.directive';
import { SpinnerComponent } from './components/Layout/spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ResturantComponent,
    ResturantDetailsComponent,
    MenuComponent,
    ExtraComponent,
    OffersComponent,
    ColorDirective,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RatingModule.forRoot(),
    FormsModule,
    MatTabsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
