import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  public fetchData(){
    return this.http.get("https://643cb11f6afd66da6ae2a724.mockapi.io/fetch")
  }

}
