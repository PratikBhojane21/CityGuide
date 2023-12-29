import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  public user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    location: '',
  }

  ngOnInit(): void {
  }
  formSubmit(){
    // alert('submit');
    console.log(this.user);
    if(this.user.firstName == '' || this.user.firstName == null){
      // alert('Email is required');
      this.snack.open("Firstname is required!", '',{
        duration : 3000
      })
      return;
    }
    if(this.user.email == '' || this.user.email == null){
      // alert('Email is required');
      this.snack.open("Email is required!")
      return;
    }

    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
        // alert("success");
        Swal.fire('Successfully Registered', 'User Id is '+ data.id, 'success')
      },
      (error)=>{
        console.log(error);
        // alert("something went wrong");
        this.snack.open('Something went wrong','',{
          duration : 3000
        })
      }
    )
  }

  

}
