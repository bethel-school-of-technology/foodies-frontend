import { Component, OnInit } from '@angular/core';
import { ApiService } from './api-service/api.service';

@Component({
  selector: 'app-apisearch',
  templateUrl: './apisearch.component.html',
  styleUrls: ['./apisearch.component.css']
})
export class ApisearchComponent implements OnInit {
  serverName = '';
  

  constructor(public appApi: ApiService) {
    
   }

  ngOnInit() {
     
    }
      
  
  onRecipeSearched(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }
  
  onCreateSearch() {
      this.appApi.getApi(this.serverName).subscribe((data: {
        recipes: any[]
      }) => {
      console.log(data.recipes);
    }); 
      this.appApi.getRecipe(47746).subscribe((recipes: {
        recipe_id: any,
        f2f_url: any,
        image_url: any,
        title: any,
        publisher: any,

      }) => {
          console.log(recipes);
      }); 
    
    }
  }