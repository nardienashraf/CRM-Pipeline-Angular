import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  segmentsList: string[];
  enteredSearchValue: string = '';
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor(){
    this.segmentsList = [
      "Segment A (21)",
      "Segment B (7)",
      "Segment C (14)"
    ]
  }

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
