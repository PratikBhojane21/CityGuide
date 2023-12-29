import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addplace',
  templateUrl: './addplace.component.html',
  styleUrls: ['./addplace.component.css']
})
export class AddplaceComponent implements OnInit {

  place:any={
    placeName:'',
    placeAddress:'',
    placeLink:'',
  };

  constructor(private _place:PlaceService, private _snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.place.placeName.trim()=='' || this.place.placeName==null){
      this._snack.open("Place name Required !!", '',{
        duration: 3000
      });
      return;
    }
    if(this.place.placeAddress.trim()=='' || this.place.placeAddress==null){
      this._snack.open("Address is Required !!", '',{
        duration: 3000
      });
      return;
    }
    this._place.addPlace(this.place).subscribe(
      (data:any)=>{
        Swal.fire("Successfully added", 'Place is added successfully', 'success');
        this.router.navigate(['/admin/place']);
      },
      (error)=>{
        Swal.fire('Error !!', 'server error');
      }
    )
  }
}
