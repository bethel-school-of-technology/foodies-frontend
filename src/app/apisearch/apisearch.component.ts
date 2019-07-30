import { Component, OnInit } from '@angular/core';
import { ApiService } from './api-service/api.service';





@Component({
  selector: 'app-apisearch',
  templateUrl: './apisearch.component.html',
  styleUrls: ['./apisearch.component.css']
})
export class ApisearchComponent implements OnInit {
  static displayItems(displayItems: any) {
    throw new Error("Method not implemented.");
  }
  serverName = '';
  result;
  errorFromSubscribe;
  errorFromCatch;
  public displayItems: any[] = [];
  
  
  
  
  
  
  /* {
    publisher: any;
    f2f_url: any;
    title: any;
    source_url: any;
    recipe_id: number;
    image_url: any;
    social_rank: number;
    publisher_url: any;
  } */

  constructor(public appApi: ApiService) {
    
   }

  ngOnInit() {
    this.appApi.getApi(this.serverName).subscribe((data: { recipes: any[]}) => {
      this.displayItems = data.recipes;
      console.log(this.displayItems);
    }, error => {
      this.errorFromSubscribe = error;
    }); 
    }
      
  
  onRecipeSearched(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }
  
  onCreateSearch() {
      this.appApi.getApi(this.serverName).subscribe((data: { recipes: any[]}) => {
        this.displayItems = data.recipes;
        console.log(this.displayItems);
      }, error => {
        this.errorFromSubscribe = error;
      }); 
     
    }
   
    
    getItems(){
      return this.displayItems.slice();
    }

    getItem(index: number){
      return this.displayItems[index];
    }
   
  }


/* this.appApi.getRecipe(47746).subscribe((recipes: {
  recipe_id: any,
  f2f_url: any,
  image_url: any,
  title: any,
  publisher: any,

}) => {
    console.log(recipes);
}); */












  /*   */