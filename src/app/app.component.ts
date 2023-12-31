import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import events from "../../src/shared/services/EventServices"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // items = [
  //   new WishItem('To Learn Angular'),
  //   new WishItem('to go for walk',true),
  //   new WishItem('find the grass cutter',true),
  //   new WishItem('complete the all task')
  // ];

  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('to go for walk', true),
    new WishItem('find the grass cutter', true),
    new WishItem('complete the all task'),
  ];
  title = 'whishlist';
  protected readonly WishItem = WishItem;

  constructor() {
    events.listen('removeWish',(wish)=>{

      console.log(wish)
    });
  }


  filter:any;

}
