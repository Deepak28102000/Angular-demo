import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor( 
    private router: Router, 
    ){}


  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
});




onSubmit() {
  console.log("reactive form submitted");
  console.log(this.form);
}

login(){
  console.log(this.form);
  
}
signUp(){
  this.router.navigate(['/signup'])
  
}

forget(){
  this.router.navigate(['/forgot']);
}


}
