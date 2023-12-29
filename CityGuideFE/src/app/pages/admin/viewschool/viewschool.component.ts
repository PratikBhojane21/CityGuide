import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewschool',
  templateUrl: './viewschool.component.html',
  styleUrls: ['./viewschool.component.css']
})
export class ViewschoolComponent implements OnInit {

  school:any = [
    // {
    //   sid: 12,
    //   schoolname: 'PICT',
    //   universityname: 'SPPU',
    //   saddress: 'Katraj, Pune',
    //   swebsite: 'pict.edu',
    // },
    // {
    //   sid: 12,
    //   schoolname: 'PICT',
    //   universityname: 'SPPU',
    //   saddress: 'Katraj, Pune',
    //   swebsite: 'pict.edu',
    // },
    // {
    //   sid: 12,
    //   schoolname: 'PICT',
    //   universityname: 'SPPU',
    //   saddress: 'Katraj, Pune',
    //   swebsite: 'pict.edu',
    // },
  ]
  constructor(private _school:SchoolService) { }

  ngOnInit(): void {
    this._school.school().subscribe((data:any)=>{
      this.school=data;
      var len = this.school.length;
      console.log(this.school);
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error ","Error in loading data",'error')
    },
    )
  }

  deleteSchool(sId: any){
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result)=>{
      if(result.isConfirmed){
        this._school.deleteSchool(sId).subscribe((data:any)=>{
          // this.school = this.school.filter((sc:any)=>sc.sId != sId);
          Swal.fire('Successfull', 'School data deleted', 'success');
          this._school.school().subscribe((data:any)=>{
            this.school=data;
            console.log(this.school);
          },
          (error)=>{
            console.log(error);
            Swal.fire("Error ","Error in loading data",'error')
          },
          )
        },
        (error)=>{
          Swal.fire('Error', 'Error in deleting school data', 'error');
        }
        )
      }
    })
  }

}
