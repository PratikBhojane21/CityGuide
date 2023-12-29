import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrls: ['./viewhotel.component.css']
})
export class ViewhotelComponent implements OnInit {

  hotel:any;
  constructor(private _hotel:HotelService) { }

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

  deleteHotel(hid: any){
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result)=>{
      if(result.isConfirmed){
        this._hotel.deleteHotel(hid).subscribe((data:any)=>{
          // this.school = this.school.filter((sc:any)=>sc.sId != sId);
          Swal.fire('Successfull', 'Hotel data deleted', 'success');
          this._hotel.hotel().subscribe((data:any)=>{
            this.hotel=data;
            console.log(this.hotel);
          },
          (error)=>{
            console.log(error);
            Swal.fire("Error ","Error in loading data",'error')
          },
          )
        },
        (error)=>{
          Swal.fire('Error', 'Error in deleting hotel data', 'error');
        }
        )
        
      }
    })
  }
}
