import { Component, Input, OnInit } from '@angular/core';
import { Post2 } from '../applications-number2.component';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.css']
})
export class Post2Component implements OnInit{
  @Input() post2: Post2 = {
    title: 'title',
    text: 'text',
    id:0
  };
  constructor() { }
  ngOnInit(){}
}
