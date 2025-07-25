import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = '';
  sortOption: string = 'none';

  products = [
    { name: 'Astérix', price: 15, imageUrl: 'assets/images/Asterix.jpg', description: "Figurine Astérix" },
    { name: 'Obélix', price: 12, imageUrl: 'assets/images/Obelix.jpg', description: "Figurine Obélix" },
    { name: 'Idéfix', price: 8, imageUrl: 'assets/images/Idefix.jpg', description: "Figurine Idéfix" }
  ];

  selectedProduct: any = null; 

  get filteredProducts() {
    let result = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    switch (this.sortOption) {
      case 'priceAsc':
        return result.sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return result.sort((a, b) => b.price - a.price);
      case 'alpha':
        return result.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return result;
    }
  }

  openModal(product: any) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}
