import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  loginform:any;




constructor(private router:Router){

}





  ngOnInit(): void {

    this.loginform = new FormGroup ({

      username: new FormControl("" , Validators.compose([Validators.required , Validators.email ])),
      password: new FormControl ("",)
    })
  }



  submit(data:any){
    // console.log(data);


    localStorage.setItem("username" , JSON.stringify(data));

    this.router.navigate(['home']);










}


}
