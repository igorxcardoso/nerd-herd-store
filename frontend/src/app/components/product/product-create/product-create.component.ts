import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

	produto: Product = {  // O id é opecional, foi definido no model
		title: '',
		price: ''
	};

	constructor(private productService: ProductService,
				private myRouter: Router) { }

	ngOnInit(): void {
	
	}

	createProduct(): void {
		if(this.produto.price.indexOf(',') !== -1) {
			this.produto.price = this.produto.price.replace(',', '.');
		}

		this.productService.create(this.produto).subscribe(() => {
			this.productService.showMessage('Produto criado com sucesso!');
			this.myRouter.navigate(['/produtos']);
		});	
	}

	cancel(): void {
		this.productService.showMessage('Operação cancelada!');
		this.myRouter.navigate(['/produtos']);
	}
}
