import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true 
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], order: string): any[] {
    if (!products) return [];

    if (order === 'priceAsc') {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (order === 'priceDesc') {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  }
}
