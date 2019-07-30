import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homedisplay',
  templateUrl: './homedisplay.component.html',
  styleUrls: ['./homedisplay.component.css']
})
export class HomedisplayComponent implements OnInit {
  public results: {
    f2f_url: any;
    image_url: any;
    ingredients: any[];
    publisher: any;
    publisher_url: any;
    recipe_id: any;
    social_rank: any;
    source_url: any;
    title: any;
  }
    f2f_url: any;
    image_url: any;
    ingredients: any[];
    publisher: any;
    publisher_url: any;
    recipe_id: any;
    social_rank: any;
    source_url: any;
    title: any;
  

  errorFromSubscribe;
  errorFromCatch;
  
  constructor(public appApi: ApiService, private route: ActivatedRoute) { }
  
  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.appApi.getRecipe(id).subscribe(( data: {recipe: any}) => {
      this.results = data.recipe
      this.ingredients = this.results.ingredients; 
      this.f2f_url = this.results.f2f_url
      this.image_url = this.results.image_url
      this.ingredients = this.results.ingredients
      this.publisher = this.results.publisher
      this.publisher_url = this.results.publisher_url
      this.recipe_id = this.results.recipe_id
      this.social_rank= this.results.social_rank
      this.source_url= this.results.source_url
      this.title = this.results.title
      console.log(this.results);
      console.log(this.ingredients);
    }, error => {
      this.errorFromSubscribe = error;
    }); 
  }
  
  
  
}
