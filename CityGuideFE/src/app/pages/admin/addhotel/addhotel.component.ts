import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  hotel:any={
    hotelName:'',
    hotelAddress:'',
    hotelLink:'',
  };

  constructor(private _hotel:HotelService, private _snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
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
    this._hotel.addHotel(this.hotel).subscribe(
      (data:any)=>{
        Swal.fire("Successfully added", 'School/college is added successfully', 'success');
        this.router.navigate(['/admin/hotel']);
      },
      (error)=>{
        Swal.fire('Error !!', 'server error');
      }
    )
  }

}
