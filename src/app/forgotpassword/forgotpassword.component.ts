import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  public dataCheck = true;
  public otpCheck = false;
  public passwordcheck = false;

  constructor( 
    private router: Router, 
    
    ){} 

  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
    "cpassword": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "email1": new FormControl("", Validators.required),
    "otp": new FormControl("", Validators.required),
    "cotp": new FormControl("", Validators.required),
});

onSubmit() {
console.log("reactive form submitted");
console.log(this.form);
}

login(){
  this.router.navigate(['']);
}

forgetPass(){
  if(this.form.get("firstName")?.value!=''&&this.form.get("email")?.value!=''){
    alert("Please fill out this field!");
    this.dataCheck=false;
    this.otpCheck=true;
   
  }
 
}


otp(){
  if(this.form.get("email1")?.value!=''&&this.form.get("otp")?.value!=''&&this.form.get("cotp")?.value!=''){
  this.otpCheck=false;
  this.passwordcheck=true;
}
}

passwordCheck(){
  if(this.form.get("password")?.value!=''&&this.form.get("cpassword")?.value!=''){
  this.passwordcheck=false;
}
}
profile(){
  this.router.navigate(['profile']);
  console.log(this.form);
 
}


}
