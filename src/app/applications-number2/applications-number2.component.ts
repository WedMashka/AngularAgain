import { Component } from '@angular/core';

export interface Post2{
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-applications-number2',
  templateUrl: './applications-number2.component.html',
  styleUrls: ['./applications-number2.component.css']
})
export class ApplicationsNumber2Component {
  title: string = "applications Number2";
  posts2: Post2[] = [
    {
      title: "ангулар компоненты",
      text: "Компоненты — это большие составные части приложения, не зависящие друг от друга. Например, один компонент — это лента новостей, другой — шапка сайта. Приложение строится из них, как из блоков. Обычно каждый компонент хранится в отдельном файле. Для него можно создать свои HTML-шаблон и CSS-стили. Они могут находиться в том же файле, что и компонент, а могут подключаться отдельно. Создается готовый блок интерфейса со структурой, стилями и определенной логикой поведения.",
      id:1
    },
    {
      title: "ангулар модули",
      text: "Это тоже составные части приложения, но другие. Они управляют компонентами. Если компонент — это область приложения, то модуль отвечает за управление ею. Точка входа в приложение, код для анимации или навигации — это всё модули. Главный модуль есть в каждом проекте.Дополнительные добавляются по мере необходимости и выполняют конкретные задачи.Они нужны, чтобы не перегружать основной модуль лишней функциональностью и не делать его слишком громоздким.",
      id: 2
    }
  ];
  updatePosts(post: Post2) {
    this.posts2.unshift(post);
  }
}
