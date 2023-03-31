import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDir3]'
})
export class Dir3Directive {
  @Input('appDir3') color: string = 'yelow';
  @Input('fontWeight') fontWeight = 'normal';

  constructor(private el: ElementRef, private r: Renderer2) { }
  
  @HostListener('mouseover') onOver() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)

  }

  @HostListener('mouseout') onOut() {
    this.r.setStyle(this.el.nativeElement, 'color', '')
    this.r.setStyle(this.el.nativeElement, 'fontWeight', '')
  }
}
