import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { interval, timer } from 'rxjs';
import { takeWhile, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public numList:any;
 public now = new Date();
 public name= ""
 public profile_id:any;
public buttonClicked=0

  constructor(private api: ApiService ) { }
ngOnInit(){
  console.log(this.now); 
console.log(this.now.toLocaleDateString());
console.log(this.now.toLocaleString());
console.log(this.now.toUTCString());
console.log(this.now.toISOString())
this.now.setDate( this.now.getDate() + 3 );
console.log(this.now); 

setTimeout(() => {
  console.log("time")
  

}, 30000);
let count=0
const timer$ = timer(30000);
let Delay:any
interval(5000).pipe(takeWhile( () => (count<=6 )), takeUntil(timer$) )
    .subscribe(() => {
      count = count + 1
      console.log(count)
      if (count == 5)
      {
        clearInterval(Delay);
        

      }
      
    });
}
  getuserData(){
    this.buttonClicked=1
    this.api.fetchData().subscribe(res =>{
      console.log(res);
      this.numList=res
      console.log(this.numList);  
     
      let windowUrl = new URL(window.location.href);
      this.profile_id = windowUrl.searchParams.get("profile_id") ? windowUrl.searchParams.get("profile_id") :0
      console.log(this.profile_id)
      for(let i=0;i<this.numList.length;i++)
      {
        if(i==this.profile_id)
        {
         console.log(this.numList[i].name,"name")
          this.name=this.numList[i].name

        }
      }

    });


}

 
}
