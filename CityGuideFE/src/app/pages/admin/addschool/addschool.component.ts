import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addschool',
  templateUrl: './addschool.component.html',
  styleUrls: ['./addschool.component.css']
})
export class AddschoolComponent implements OnInit {

  school:any={
    schoolName:'',
    universityName:'',
    sAddress:'',
    sWebsite:'',
  };

  constructor(private _school:SchoolService, private _snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.school.schoolName.trim()=='' || this.school.schoolName==null){
      this._snack.open("School / College name Required !!", '',{
        duration: 3000
      });
      return;
    }
    if(this.school.sAddress.trim()=='' || this.school.sAddress==null){
      this._snack.open("School / College name Required !!", '',{
        duration: 3000
      });
      return;
    }
    this._school.addSchool(this.school).subscribe(
      (data:any)=>{
        Swal.fire("Successfully added", 'School/college is added successfully', 'success');
        this.router.navigate(['/admin/school']);
      },
      (error)=>{
        Swal.fire('Error !!', 'server error');
      }
    )
  }

}
