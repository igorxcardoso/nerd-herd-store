import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
	selector: '[meuFor]'
})

// OnInit -> ciclo de vida de inicialização
// Onchange -> Sempre mudar vai atulizar
export class ForDirective implements OnInit { // Implementa o ciclo de vida OnInit

	@Input('meuForEm') numeros: number[];
	// O input vai pegar o que foi digita no template HTML
	// Vai pegar o que vem depois da palavra em no template HTML, no caso, uma lista com números
	
	// @Input('meuForUsando') texto: string;

	constructor(private container: ViewContainerRef,
				private template: TemplateRef<any>) {
		// console.log('MeuFor');
	}

	ngOnInit(): void {

		// Vai cirar um container que vai envolver o template que será executado, no cado o <li></li> do footer
		for(let numero of this.numeros) { // Vai ser um template para cada número
			this.container.createEmbeddedView(this.template, { $implicit: numero });
			// { $implicit: numero }   ->  Valor implicito que será passado para template
		}
		
		// console.log(this.numeros);
		// console.log(this.texto);
	} 

}
