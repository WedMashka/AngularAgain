import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createPipe'
})
export class CreatePipePipe implements PipeTransform {
  //пайп котрый возводит в степень, по умолчанию в квадрат
  transform(value: number, arg: number = 2): number {
    let t: number = 1;
    for (let x: number = 0; x < arg; x++){
      t = t * value;
    }
    return t;
  }

  //transform(value: unknown, ...args: unknown[]): unknown {
  //  return null;
  //}

  //value: unknown принимаеемое пайпом значение, указывает тип значения вместо unknown
  // ...args: unknown[] массив аргументов, если аргумент один то убираем массив arg: unknown
  // unknown помледнне это тип значения


}
