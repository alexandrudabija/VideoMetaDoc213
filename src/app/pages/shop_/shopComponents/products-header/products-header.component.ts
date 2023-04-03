import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.less']
})
export class ProductsHeaderComponent  {
  @Output() columsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort :string= 'desc';
  itemsShowCount:number = 100;



  onSortUpdated(newSort:string): void
  {

    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count:number):void
  {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
}






  onColumnsUpdated(colsNum: number): void
  {

    this.columsCountChange.emit(colsNum);
  }




}
