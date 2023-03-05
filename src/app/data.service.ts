import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http:HttpClient) { 
  }
  getAPIData(data:any){
    if(data.search=="")
      return this.http.get(`https://newsapi.org/v2/everything?q=${data.queries}&pageSize=50&language=${data.lang}&apiKey=df16f6a1fd32434b8abfb7cc21cb4af4`)
    else
      return this.http.get(`https://newsapi.org/v2/everything?q=${data.search}&pageSize=50&language=${data.lang}&apiKey=df16f6a1fd32434b8abfb7cc21cb4af4`)

  }
}
