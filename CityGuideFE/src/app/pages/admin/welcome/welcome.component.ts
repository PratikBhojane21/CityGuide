import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { PlaceService } from 'src/app/services/place.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  slen:any
  school:any
  hlen:any
  hotel:any
  tlen:any
  place:any
  constructor(private _school:SchoolService, private _hotel:HotelService, private _place:PlaceService) { }

  ngOnInit(): void {
    this._school.school().subscribe((data:any)=>{
      this.school=data;
      this.slen=this.school.length;
    },
    ),
    this._hotel.hotel().subscribe((data:any)=>{
      this.hotel=data;
      this.hlen=this.hotel.length;
    },
    ),
    this._place.place().subscribe((data:any)=>{
      this.place=data;
      this.tlen=this.place.length;
    },
    )
  }
  
}
