import { Component } from '@angular/core';
import { WishItem } from "src/shared/models/wishItem";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // items = [
  //   new WishItem('To Learn Angular'),
  //   new WishItem('to go for walk',true),
  //   new WishItem('find the grass cutter',true),
  //   new WishItem('complete the all task')
  // ];

  items : WishItem[] = [
      new WishItem('To Learn Angular'),
      new WishItem('to go for walk',true),
      new WishItem('find the grass cutter',true),
      new WishItem('complete the all task')

  ];
  title = 'whishlist';
  protected readonly WishItem = WishItem;


  // toggleItem(e:any){
  //   console.log(e);
  // }



  toggleItem(items:WishItem){
    items.isComplete = !items.isComplete;
    console.log(items);
  }
  newWishText='';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText='';
  }

}


