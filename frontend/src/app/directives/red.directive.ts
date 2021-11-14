import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[myRed]'
})
export class RedDirective {

	constructor(private el: ElementRef) {
		el.nativeElement.style.color = '##c59292';
	}

}
