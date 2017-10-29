import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'reactive-form-model',
  templateUrl: './reactive-form-model.component.html',
  styleUrls: ['./reactive-form-model.component.css']
})
export class ReactiveFormModelComponent implements OnInit {

  searchField: FormControl;
  searches: string[] = [];
  
  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
    .debounceTime(400) //remember the rxjs import
    .distinctUntilChanged() //remember the rxjs import
    .subscribe(term => this.searches.push(term));
  }

}
