import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title: string = 'post component';
  img = 'https://avatars.mds.yandex.net/i?id=7cfd9cf2e331ed765a1fc224ec62287a3e4e1261-8497033-images-thumbs&n=13';

  inputValue: string = '';
  inputValue2: string = '';
  otherTitle: string = '';
  valueTitle: string = '';

  constructor() {
    setInterval(() => {
      if (this.img == 'https://avatars.mds.yandex.net/i?id=7cfd9cf2e331ed765a1fc224ec62287a3e4e1261-8497033-images-thumbs&n=13') {
        return this.img = 'https://thumbnail.imgbin.com/8/13/1/imgbin-angularjs-web-application-single-page-application-ruby-on-rails-original-sticker-H5k13VLwV9tAcLMkNB7WmBAUw_t.jpg';
      } else {
        return this.img = 'https://avatars.mds.yandex.net/i?id=7cfd9cf2e331ed765a1fc224ec62287a3e4e1261-8497033-images-thumbs&n=13';
      }
    }, 5000)
  }
  oninput1(event?: any): any {
    return this.inputValue = event.target.value;
  }
  oninput2(event?: any): any {
    return this.inputValue2 = event.target.value;
  }

}

