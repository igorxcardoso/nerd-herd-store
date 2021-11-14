import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product-update',
	templateUrl: './product-update.component.html',
	styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent implements OnInit {

	produto: Product
	
	constructor(private productService: ProductService,
				private myRouter: Router,
				private route: ActivatedRoute) { }

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');
		this.productService.readByid(id).subscribe(produto => {
			this.produto = produto;
		}); // Vou recerber o id a partir da navegação
	}

	updateProduct(): void {
		if (this.produto.price.indexOf(',') !== -1) {
			this.produto.price = this.produto.price.replace(',', '.'); // Substitui ',' por '.'
		} 

		this.productService.update(this.produto).subscribe(() => {
			this.productService.showMessage('Produto atualizado com sucesso!');
			this.myRouter.navigate(['/produtos']);
		});
	}

	cancel(): void {
		this.productService.showMessage('Operação cancelada!');
		this.myRouter.navigate(['/produtos']);
	}
}
