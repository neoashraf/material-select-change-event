import {
  Component, ElementRef
} from '@angular/core';
import { VERSION } from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  version = VERSION;

  selectedFood1: string;
  selectedFood2: string;
  state = 'write';

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  removed = [];

  foodControl = new FormControl('', []);

  onFoodSelection1(data) {
    this.removed.push(
        this.foods.find(elem=>{
          return elem.viewValue = data;
        })
    );
    this.foods.splice(        
      this.foods.findIndex(elem=>{
          return elem.viewValue = data;
        }),1
    );
    this.state = 'read';
    console.log(this.removed);
    console.log(this.foods);
  }

  toggle(data){
    console.log("Toggle");
    if(this.state === 'read'){
      this.state = 'write';
      this.foods.push(
        this.removed.find(elem=>{
          return elem.viewValue = data;
        })
      );
    }
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */