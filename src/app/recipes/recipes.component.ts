import { Component, OnInit } from '@angular/core';

interface RecipeInterface {
  name: String;
  instructions: String
}

class Recipe {

  name: string | undefined;
  instructions: string | undefined;

  constructor(
    name: String,
    instructions: String
  ) {}

}

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [];
  showForm = false;
  recipe = new Recipe('', '');

  constructor() { }

  ngOnInit(): void {
    // const test = {name: "test recipe"};
    // this.recipes.push(test);
  }

  addRecipe() {
    this.showForm = true;
    this.recipe = new Recipe('', '');
  }

  onSubmit() {
    this.showForm = false;
    this.recipes.push(this.recipe);
  }
}
