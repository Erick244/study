import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product-delete',
	templateUrl: './product-delete.component.html',
	styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

	product!: Product;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private productService: ProductService
	) { }

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');
		this.productService.readById(id!).subscribe((product: Product) => {
			this.product = product;
		})
	}

	deleteProduct(): void {
		this.productService.delete(`${this.product.id}`).subscribe(() => {
			this.productService.showMessage("Produto excluido com sucesso!");
			this.router.navigate(['/products']);
		})
	}

	cancel(): void {
		this.router.navigate(['/products']);
	}

}
