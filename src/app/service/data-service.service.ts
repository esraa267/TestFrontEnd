import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private _http: HttpClient) {}

  getBranches() {
    return this._http.get<any>(`${environment.BaseURL}home/branch-types`);
  }
  getResturants(id: number) {
    return this._http.get<any>(
      `${environment.BaseURL}home/restaurants?branch_type_id=${id}`
    );
  }
  getResturantDetails(id: number) {
    return this._http.get<any>(`${environment.BaseURL}restaurant/${id}`);
  }
}
