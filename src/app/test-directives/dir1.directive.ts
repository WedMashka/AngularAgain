import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDir1]'
})
export class Dir1Directive {
// для статических свойств
  constructor(private el: ElementRef, private r: Renderer2) { 
    //this.r.setStyle(this.el.nativeElement, 'color', 'red');
    //this.el.nativeElement наш элемент дом дерева
  }
//для  динамики
   
  
  
  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log(event.target)
  }
  //<click> событие котоое хотим слушать
  //<onClick> метод на который мы добавили декоратор
  //<event> параметр метода с типом <Event> -стандартный тип в ts

  @HostListener('mouseover') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'fontSize', '1.5rem')
  }

  @HostListener('mouseout') onOut() {
    this.r.setStyle(this.el.nativeElement, 'fontSize', '')
  }


/*
  @Input('appDir1') color: string = 'red';

  @HostBinding('style.color') elColor = '';

  @HostListener('mouseover') onEnter() {
    this.elColor = this.color
  }

  @HostListener('mouseout') onOut() {
    this.elColor = ''
  }
*/
}
