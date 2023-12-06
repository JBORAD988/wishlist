import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

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




  // filter:any = () =>{};
  filter:any = () =>true;  // other ways to solve the not loading the list at starting



  get visibleItems(): WishItem[]{
    return this.items.filter(this.filter)
  }

  // toggleItem(e:any){
  //   console.log(e);
  // }



  // listFilter: string = '0';
  //
  // get visibleItems(): WishItem[] {
  //   let value = this.listFilter;
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
  // }


}
