import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  query: string; 
  id: any;

  constructor(public http: HttpClient  ) {
   
  }
    getApi(query) {
      this.query = query;
      return this.http.get(`https://www.food2fork.com/api/search?key=74d38d0a5f3d2ced267a3a9ae92dbfba&q=${this.query}`);
    };
    getRecipe(id) {
      this.id = id;
      return this.http.get(`https://www.food2fork.com/api/get?key=74d38d0a5f3d2ced267a3a9ae92dbfba&rId=${this.id}`);  
    };

  
}

//6b4f5e2ad750427b0bd7975a74d2df3b
//78d3ca6d7259b4a1df14f968a8a47482
//74d38d0a5f3d2ced267a3a9ae92dbfba