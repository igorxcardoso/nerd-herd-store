import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';


// Nesse arquivo é tratado questões relacionado as rotas

// Vai substituir esse componentes la no router-outlet que está no nav.component.html
// Add as rotas da aplicação
const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "produtos",  // Apenas o nome sem / no início
		component: ProductCrudComponent
	},
	{

		path: "produtos/criar",
		component: ProductCreateComponent
	},
	{

		path: "produtos/atualizar/:id",
		component: ProductUpdateComponent
	},
	{

		path: "produtos/deletar/:id",
		component: ProductDeleteComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
