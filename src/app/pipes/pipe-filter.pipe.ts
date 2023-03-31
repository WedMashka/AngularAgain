import { Pipe, PipeTransform } from '@angular/core';
import { Post5 } from './pipes.component';

@Pipe({
  name: 'pipeFilter'
})
export class PipeFilterPipe implements PipeTransform {


  transform(value: Post5[], search: string): Post5[] {
    if (!search.trim()) {
      return value;
    } else {
      return value.filter((post) => {
        return post.title.includes(search) || post.text.includes(search);
      })
    }
  }
  //value значение которое принимает пайп в данном случае пайп применен к переменной post5 in Html template которую мы завели класее компонента
// !search.trim() говорит если ничего не ввели то возвращает все как есть
//      return value.filter((post) => {
  //      return post.title.includes(search) || post.text.includes(search);
    //  }) Стандартный метод массива который возвращает только те значения  которые удовлетворяют условию внутри.

}
