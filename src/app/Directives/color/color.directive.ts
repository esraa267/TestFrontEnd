import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Color]',
})
export class ColorDirective {
  constructor(elRef: ElementRef) {
    elRef.nativeElement.style.color = '#ff5722';
    elRef.nativeElement.style.fontSize = '2rem';
    elRef.nativeElement.style.lineHeight = '2.2rem';
  }
}
