import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatehotel',
  templateUrl: './updatehotel.component.html',
  styleUrls: ['./updatehotel.component.css']
})
export class UpdatehotelComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private _hotel:HotelService, private router:Router, private _snack:MatSnackBar) { }

  hid:any=0;
  hotel:any;

  ngOnInit(): void {
    this.hid = this._route.snapshot.params['hid'];
    // alert(this.sId);
    this._hotel.getHotel(this.hid).subscribe(
      (data:any)=>{
        this.hotel=data;
        console.log(this.hotel);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  public updateHotel(){
    if(this.hotel.hotelName.trim()=='' || this.hotel.hotelName==null){
      this._snack.open("Hotel name Required !!", '',{
        duration: 3000
      });
      return;
    }
    if(this.hotel.hotelAddress.trim()=='' || this.hotel.hotelAddress==null){
      this._snack.open("Address is Required !!", '',{
        duration: 3000
      });
      return;
    }
    // alert("yes");
    this._hotel.updateHotel(this.hotel).subscribe((data)=>{
      Swal.fire("Scuccessfully Updated","Hotel Updated", 'success').then((e)=>{
        this.router.navigate(['/admin/hotel']);
      });
    },
    (error)=>{
      Swal.fire("Error","Error in updating", 'error');
    });
  }
}
