import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
    "emailid": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
});
  

    
  constructor( 
    private router: Router, 
    ){}


  onSubmit()
  { 
    console.log("reactive form submitted");
  console.log(this.form);

  }
  
  signUp(){
    this.router.navigate(['profile'])
    
  }
 
  backTo(){
    this.router.navigate([''])
  }

}
