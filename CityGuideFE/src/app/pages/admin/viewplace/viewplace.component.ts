import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewplace',
  templateUrl: './viewplace.component.html',
  styleUrls: ['./viewplace.component.css']
})
export class ViewplaceComponent implements OnInit {

  place:any;
  constructor(private _place:PlaceService) { }

  ngOnInit(): void {
    this._place.place().subscribe((data:any)=>{
      this.place=data;
      console.log(this.place);
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error ","Error in loading data",'error')
    },
    )
  }

  deletePlace(tid: any){
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result)=>{
      if(result.isConfirmed){
        this._place.deletePlace(tid).subscribe((data:any)=>{
          // this.school = this.school.filter((sc:any)=>sc.sId != sId);
          Swal.fire('Successfull', 'Place data deleted', 'success');
          this._place.place().subscribe((data:any)=>{
            this.place=data;
            console.log(this.place);
          },
          (error)=>{
            console.log(error);
            Swal.fire("Error ","Error in loading data",'error')
          },
          )
        },
        (error)=>{
          Swal.fire('Error', 'Error in deleting place data', 'error');
        }
        )
        
      }
    })
  }

}
