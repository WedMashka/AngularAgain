import { Component, Input, OnInit } from '@angular/core';
import { Post2 } from './applications-number2/applications-number2.component';

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
