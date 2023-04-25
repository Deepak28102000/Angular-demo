import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public numList:any;
 public now = new Date();
  constructor(private api: ApiService ) { }
ngOnInit(){
  console.log(this.now); 
console.log(this.now.toLocaleDateString());
console.log(this.now.toLocaleString());
console.log(this.now.toUTCString());
console.log(this.now.toISOString())
this.now.setDate( this.now.getDate() + 3 );
console.log(this.now); 
let windowUrl = new URL(window.location.href);
let profile_id = windowUrl.searchParams.get("profile_id") ? windowUrl.searchParams.get("profile_id") :0
console.log(profile_id)
}
  getuserData(){
    this.api.fetchData().subscribe(res =>{
      console.log(res);
      this.numList=res
      console.log(this.numList);   

    });


}

 
}
