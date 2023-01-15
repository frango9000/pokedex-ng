import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'img[imgFallback]',
})
export class ImgFallbackDirective {
  @Input() imgFallback: string;
  constructor(private readonly elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('error') loadFallbackOnError() {
    const element: HTMLImageElement = <HTMLImageElement>this.elementRef.nativeElement;
    element.src = this.imgFallback || '';
  }
}
