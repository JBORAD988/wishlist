import { Component ,OnInit ,Input ,Output ,} from '@angular/core';
import {WishItem} from "../../shared/models/wishItem";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit{

  @Input() WishText! :String;
  @Input() fullFilled! : boolean;
  @Output() fullFilledChange =new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {

  }

  toggleableFilled()
  {
    this.fullFilled=!this.fullFilled;
    this.fullFilledChange.emit(this.fullFilled);

  }
}
