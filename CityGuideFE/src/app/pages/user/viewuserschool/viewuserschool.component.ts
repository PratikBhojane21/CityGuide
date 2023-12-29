import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewuserschool',
  templateUrl: './viewuserschool.component.html',
  styleUrls: ['./viewuserschool.component.css']
})
export class ViewuserschoolComponent implements OnInit {

  school:any;
  constructor(public _school:SchoolService) { }

  ngOnInit(): void {
    this._school.school().subscribe((data:any)=>{
      this.school=data;
      console.log(this.school);
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error ","Error in loading data",'error')
    },
    )
  }

}
