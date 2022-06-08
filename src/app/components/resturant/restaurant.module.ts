import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExtraComponent } from './extra/extra.component';
import { MenuComponent } from './menu/menu.component';
import { OffersComponent } from './offers/offers.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { ResturantDetailsComponent } from './resturant-details/resturant-details.component';
import { ResturantComponent } from './resturant.component';

@NgModule({
  declarations: [
    ResturantComponent,
    ResturantDetailsComponent,
    MenuComponent,
    ExtraComponent,
    OffersComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    RatingModule.forRoot(),
    FormsModule,
    MatTabsModule,
    RestaurantRoutingModule,
  ],
})
export class RestaurantModule {}
