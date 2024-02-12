import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoadImages]',
  standalone: true
})
export class LazyLoadImagesDirective implements AfterViewInit{

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'loading', 'lazy');
  }

}
