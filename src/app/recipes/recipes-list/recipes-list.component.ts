import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
     'this is a test',
      'https://www.godairyfree.org/wp-content/uploads/2017/03/Cabbage-and-Potato-Casserole-writing.jpg')
  ];
    
  constructor() { }

  ngOnInit() {
  }

}
