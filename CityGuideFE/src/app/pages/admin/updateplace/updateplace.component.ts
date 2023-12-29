import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateplace',
  templateUrl: './updateplace.component.html',
  styleUrls: ['./updateplace.component.css']
})
export class UpdateplaceComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private _place:PlaceService, private router:Router, private _snack:MatSnackBar) { }

  sid:any=0;
  place:any;

  ngOnInit(): void {
    this.sid = this._route.snapshot.params['tid'];
    // alert(this.sId);
    this._place.getPlace(this.sid).subscribe(
      (data:any)=>{
        this.place=data;
        console.log(this.place);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  public updatePlace(){
    if(this.place.placeName.trim()=='' || this.place.placeName==null){
      this._snack.open("Hotel name Required !!", '',{
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
    // alert("yes");
    this._place.updatePlace(this.place).subscribe((data)=>{
      Swal.fire("Scuccessfully Updated","Place Updated", 'success').then((e)=>{
        this.router.navigate(['/admin/place']);
      });
    },
    (error)=>{
      Swal.fire("Error","Error in updating", 'error');
    });
  }
}
