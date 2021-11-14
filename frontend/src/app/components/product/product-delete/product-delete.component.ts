import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-delete',
    templateUrl: './product-delete.component.html',
    styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

    myProduto: Product

    constructor(private productService: ProductService,
                private myRouter: Router,
                private myRoute: ActivatedRoute) { }

    ngOnInit(): void {
        // Pega o id do produto
        const id = this.myRoute.snapshot.paramMap.get('id');
        this.productService.readByid(id).subscribe(product => {
            this.myProduto = product
        });
    }

    deleteProduct(): void {
        this.productService.delete(this.myProduto.id).subscribe(() => {
            this.productService.showMessage('Produto excluido com sucesso!')
            this.myRouter.navigate(['/produtos'])
        });
    }

    cancel(): void {
        this.productService.showMessage('Operação cancelada!');
        this.myRouter.navigate(['/produtos']);
    }
}
