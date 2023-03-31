import { Component } from '@angular/core';

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
  numberFloat: number = Math.PI
  userJonah: any={
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
  }
}
