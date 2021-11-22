
// Para expor o service para fora do módulo é preciso declarar em em providers no app.module

import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';   // Model (interface) criado 

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private URL_PRODUCT: string = "http://localhost:3000/products";

    constructor(private snackBar: MatSnackBar,
        private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ['msg-error'] : ['msg-sucess']
        });
    }

    create(product: Product): Observable<Product> {
        return this.http.post<Product>(this.URL_PRODUCT, { product }).pipe(
            map((obj) => obj),
            catchError((myErro) => this.errorHandler(myErro))
        );
    }

    read(): Observable<Product[]> {
        return this.http.get<Product[]>(this.URL_PRODUCT);
    }

    readByid(id: any): Observable<Product> {
        const url = `${this.URL_PRODUCT}/${id}`;
        return this.http.get<Product>(url);
    }

    update(product: Product): Observable<Product> {
        const url = `${this.URL_PRODUCT}/${product.id}`;
        return this.http.put<Product>(url, product).pipe(
            map((obj) => obj),
            catchError((myErro) => this.errorHandler(myErro))
        );
    }

    delete(id: any): Observable<Product> {
        const url = `${this.URL_PRODUCT}/${id}`;
        return this.http.delete<Product>(url).pipe(
            map((obj) => obj),
            catchError((myErro) => this.errorHandler(myErro))

        );
    }

    errorHandler(erro: any): Observable<any> {
        console.log(erro);
        this.showMessage("Ocorreu um erro!", true);
        return EMPTY;
    }
}
