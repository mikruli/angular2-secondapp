import { ProductService } from './product.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'products',
    template: `
        <h2>Products</h2>
        <div *ngFor="let product of products">
            <product [data]="product"></product>
        </div>
    `,
    providers: [ProductService]
})

export class ProductsComponent {
    products;

    constructor(productService: ProductService) {
        this.products = productService.getProducts();
    }

}