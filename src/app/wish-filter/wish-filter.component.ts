import {Component, EventEmitter,Input, OnInit, Output} from '@angular/core';
import {WishItem} from "../../shared/models/wishItem";

const filters =[
  (item : WishItem)=> item,
  (item : WishItem)=>!item.isComplete,
  (item : WishItem)=> item.isComplete

];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {
   @Input() filter:any
  @Output() filterChange = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    // this.ChangeFilter('0') this method is use to solve preload problem of list
    // this.filter.emit(filters[0]);
    this.updateFilter('0');


  }


  listFilter: String = '0'

  // ChangeFilter(value: any) {
  //   this.filter.emit(filters[value]);
  // }

  updateFilter(value: any) {
    this.filter=filters[value];
    this.filterChange.emit(this.filter);
  }


  //
  //   if (value === '0') {
  //     // Show all items
  //     return this.items;
  //   } else if (value === '1') {
  //     // Show only incomplete items
  //     return this.items.filter((item) => !item.isComplete);
  //   } else {
  //     // Show only completed items
  //     return this.items.filter((item) => item.isComplete);
  //   }
  //
  //
  // }
}
