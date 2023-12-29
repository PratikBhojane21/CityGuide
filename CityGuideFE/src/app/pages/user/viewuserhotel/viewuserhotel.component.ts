import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewuserhotel',
  templateUrl: './viewuserhotel.component.html',
  styleUrls: ['./viewuserhotel.component.css']
})
export class ViewuserhotelComponent implements OnInit {

  hotel:any;
  constructor(public _hotel:HotelService) { }

  ngOnInit(): void {
    this._hotel.hotel().subscribe((data:any)=>{
      this.hotel=data;
      console.log(this.hotel);
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error ","Error in loading data",'error')
    },
    )
  }

}
