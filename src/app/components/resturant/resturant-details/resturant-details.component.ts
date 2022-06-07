import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResturantDetails } from 'src/app/Models/ResturantDetails';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-resturant-details',
  templateUrl: './resturant-details.component.html',
  styleUrls: ['./resturant-details.component.css'],
})
export class ResturantDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private data: DataServiceService
  ) {}
  restaurant!: ResturantDetails;

  ngOnInit(): void {
    this.getResturant();
  }
  getResturant() {
    this.route.params.subscribe((param) => {
      this.data.getResturantDetails(param['Rid']).subscribe((res) => {
        this.restaurant = res.data;
      });
    });
  }
}
