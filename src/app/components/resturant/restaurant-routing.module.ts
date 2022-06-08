import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ResturantDetailsComponent } from './resturant-details/resturant-details.component';
import { ResturantComponent } from './resturant.component';
const routes: Routes = [
  {
    path: 'branchies',

    component: HomeComponent,
  },

  { path: 'branchies/:Bid', component: ResturantComponent },
  {
    path: 'branchies/:Bid/:Rid',
    component: ResturantDetailsComponent,
  },
];
@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class RestaurantRoutingModule {}
