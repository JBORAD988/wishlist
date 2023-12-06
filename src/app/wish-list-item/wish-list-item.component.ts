import { Component ,OnInit ,Input ,Output ,} from '@angular/core';
import {WishItem} from "../../shared/models/wishItem";
import {EventEmitter} from "@angular/core";
import events from "../../../src/shared/services/EventServices"

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit{


  get cssClasses(){
   // return this.fullFilled? 'strikeout text-muted': ''   // Second method  ******We also Use Normal expressions
   //  return this.fullFilled? ['strikeout','text-muted']: []    //third Method **** we also use  Array on multiple css attr
   //  return {'strikeout': this.fullFilled , 'text-muted': this.fullFilled }   //for Multiple css class and cunditions
   return {'strikeout text-muted': this.fullFilled}


  }
  @Input() WishText! :String;
  @Input() fullFilled! : boolean;
  @Output() fullFilledChange =new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {

  }

  removeWish(){
    events.emit('removeWish', this.WishText)
  }

  toggleableFilled()
  {
    this.fullFilled=!this.fullFilled;
    this.fullFilledChange.emit(this.fullFilled);

  }
}
