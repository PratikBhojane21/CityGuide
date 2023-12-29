import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private _http:HttpClient) {}
  
  public hotel(){
    return this._http.get(`${baseUrl}/hotel/`);
  }
  public addHotel(hotel: any){
    return this._http.post(`${baseUrl}/hotel/`, hotel);
  }
  public deleteHotel(hid: any){
    return this._http.delete(`${baseUrl}/hotel/${hid}`);
  }

  public getHotel(hid: any){
    return this._http.get(`${baseUrl}/hotel/${hid}`);
  }

  public updateHotel(hotel: any){
    return this._http.put(`${baseUrl}/hotel/`,hotel);
  }
}
