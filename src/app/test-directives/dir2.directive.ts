import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDir2]'
})
export class Dir2Directive {
  @Input('appDir2') color: string = 'red';

  constructor(private el: ElementRef, private r: Renderer2) { }

  @HostListener('mouseover') onOver() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color)
  }

  @HostListener('mouseout') onOut() {
    this.r.setStyle(this.el.nativeElement, 'color', '')
  }

}
