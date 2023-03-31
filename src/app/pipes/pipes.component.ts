import { Component } from '@angular/core';

export interface Post5{
  title: string;
  text: string;
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  e: number = Math.E;
  str: string = 'Pipes представляют специальные инструменты, которые позволяют форматировать отображаемые значения. Например, нам надо вывести определенную дату';
  str2: string = 'Hellow World';
  date: Date = new Date();
  numberFloat: number = Math.PI;
  userJonah: any = {
    userName: 'Jonah',
    car: {
      brand: 'chevrolet',
      model: 'lanos',
      users: {
        1: undefined,
        2: undefined,
        3: 'Jonah Smith'
      }
    },
  };
  search = '';
   posts5: Post5[] = [
    { title: 'Pipe', text: 'Angular pipe, или просто фильтр, нужен для преобразования данных прямо в HTML-шаблоне. Например, отображение даты и времени в желаемом формате или задание формата вывода числового значения.' },
    { title: 'Directives', text: 'Angular директивы используются для изменения внешнего вида или поведения DOM-элемента. Выделяют три типа директив:' },
    { title: 'Java', text: 'Язык програмирования который еще не изучал' }
  ];
};
 