import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {


  constructor(private _http:HttpClient) {}
  
  public school(){
    return this._http.get(`${baseUrl}/school/`);
  }

  public addSchool(school: any){
    return this._http.post(`${baseUrl}/school/`, school);
  }

  public deleteSchool(sId: any){
    return this._http.delete(`${baseUrl}/school/${sId}`);
  }

  public getSchool(sId: any){
    return this._http.get(`${baseUrl}/school/${sId}`);
  }

  public updateSchool(school: any){
    return this._http.put(`${baseUrl}/school/`,school);
  }
}
