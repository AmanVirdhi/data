import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsAPIService {
  constructor(private http:HttpClient) { }

  // function to get url
getdata(){
  return this.http.get<any>("https://api.instantwebtools.net/v1/airlines")
}
}
