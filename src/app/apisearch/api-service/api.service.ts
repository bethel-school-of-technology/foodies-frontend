import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  query: string; 
  id: any;

  constructor(public http: HttpClient) {
   
  }
    getApi(query): Observable<object>  {
      this.query = query;
      return this.http.get(`https://www.food2fork.com/api/search?key=5abf056d45968ce652cd61e5b6ae9184&q=${this.query}`);
    };
    getRecipe(id) {
      this.id = id;
      return this.http.get(`https://www.food2fork.com/api/get?key=5abf056d45968ce652cd61e5b6ae9184&rId=${this.id}`);  
    };
  
}
