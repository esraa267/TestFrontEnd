import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResturantDetailsComponent } from './components/resturant/resturant-details/resturant-details.component';
import { ResturantComponent } from './components/resturant/resturant.component';

const routes: Routes = [
  { path: '', redirectTo: '/branchies', pathMatch: 'full' },
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
