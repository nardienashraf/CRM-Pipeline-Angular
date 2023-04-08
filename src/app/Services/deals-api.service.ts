import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ideals } from '../Models/ideals';

@Injectable({
  providedIn: 'root'
})
export class DealsAPIService {

  constructor(private httpClient: HttpClient) {}

  //Get All Deals
  getAllDeals() : Observable<Ideals[]>{
    return this.httpClient.get<Ideals[]>(`${environment.APIURL}`)
  }
}
