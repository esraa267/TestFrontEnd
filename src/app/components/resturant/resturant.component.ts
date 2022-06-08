import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/Models/Resturant';
import { DataServiceService } from 'src/app/service/DataService/data-service.service';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css'],
})
export class ResturantComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private data: DataServiceService
  ) {}
  resturants: Restaurant[] = [];
  loading: boolean = true;
  ngOnInit(): void {
    this.getResturants();
  }
  getResturants() {
    this.route.params.subscribe((param) => {
      this.loading = true;
      this.data.getResturants(param['Bid']).subscribe((res) => {
        this.resturants = res.data;

        this.loading = false;
      });
    });
  }
}
