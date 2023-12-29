import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateschool',
  templateUrl: './updateschool.component.html',
  styleUrls: ['./updateschool.component.css']
})
export class UpdateschoolComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private _school:SchoolService, private router:Router, private _snack:MatSnackBar) { }

  sId:any=0;
  school:any;

  ngOnInit(): void {
    this.sId = this._route.snapshot.params['sid'];
    // alert(this.sId);
    this._school.getSchool(this.sId).subscribe(
      (data:any)=>{
        this.school=data;
        console.log(this.school);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  //update school details
  public updateSchool(){
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
    // alert("yes");
    this._school.updateSchool(this.school).subscribe((data)=>{
      Swal.fire("Scuccessfully Updated","School Updated", 'success').then((e)=>{
        this.router.navigate(['/admin/school']);
      });
    },
    (error)=>{
      Swal.fire("Error","Error in updating", 'error');
    });
  }

}
