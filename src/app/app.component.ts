import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'First new component';
  introduction: boolean = false;
  directives: boolean = false;
  applications2: boolean = false;
}
