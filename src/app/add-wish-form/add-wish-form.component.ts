import { Component , OnInit, Output, EventEmitter} from '@angular/core';
import {WishItem} from "../../shared/models/wishItem";

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent implements OnInit{

  @Output() addwish = new EventEmitter<WishItem>
  constructor() {
  }

  ngOnInit() {
  }

  newWishText = '';

  addNewWish() {
    // this.items.push(new WishItem(this.newWishText));
    this.addwish.emit(new WishItem(this.newWishText))
    this.newWishText = '';
  }
}
