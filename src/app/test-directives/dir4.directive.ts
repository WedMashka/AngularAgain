import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// как выглядит директива ngIf внутри.
@Directive({
  selector: '[appDir4]'
})
export class Dir4Directive {
  @Input('appDir4') set ifNot(condition1:boolean) {
    if (condition1) {
      //show element
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      //hidden element
      this.viewContainer.clear()//отчищает блок
    }
  }
//делаем структурную директиву
  
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
  
//private templateRef: TemplateRef<any> содержит в себе содержимое будущего  шаблона
//private viewConteiner:ViewContainerRef  указывает на ангуляр шаблон
}
