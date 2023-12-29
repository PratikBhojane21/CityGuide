import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    email:'',
    password:''
  }
  constructor(private snack:MatSnackBar, private login:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("login clicked");
    if(this.loginData.email.trim()=='' || this.loginData.email==null){
      this.snack.open("Email is Required",'',{
        duration: 3000,
      });
      return;
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      this.snack.open("Password is Required",'',{
        duration: 3000,
      });
      return;
    }

    // request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);

        //login
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);
            //redirect admin: admin dashboard
            //redirect general: general dashboard
            if(this.login.getUserRole()=="admin"){
              //admin dashboard
              // window.location.href='/admin';
              this.router.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
            } else if(this.login.getUserRole()=="student"){
              //normal user dashboard
              // window.location.href='/user-dashboard';
              this.router.navigate(['user-dashboard'])
              this.login.loginStatusSubject.next(true);
            } else{
              this.login.logout();
            }
          }
        );
      },
      (error)=>{
        console.log("Error");
        console.log(error);
        this.snack.open("Invalid Details ! Try again",'',{
          duration: 3000
        })
      }
    )

  }

}
