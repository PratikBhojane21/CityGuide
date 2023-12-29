import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  constructor(private _http:HttpClient) {}
  
  public place(){
    return this._http.get(`${baseUrl}/touristplace/`);
  }
  public addPlace(place: any){
    return this._http.post(`${baseUrl}/touristplace/`, place);
  }
  public deletePlace(tid: any){
    return this._http.delete(`${baseUrl}/touristplace/${tid}`);
  }

  public getPlace(tid: any){
    return this._http.get(`${baseUrl}/touristplace/${tid}`);
  }

  public updatePlace(place: any){
    return this._http.put(`${baseUrl}/touristplace/`,place);
  }
}
