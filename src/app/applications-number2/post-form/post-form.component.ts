import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post2 } from '../applications-number2.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{
  @Output() onAdd: EventEmitter<Post2> = new EventEmitter<Post2>();
  title: string = '';
  text: string = '';

  constructor() { }
  ngOnInit(): void { }
  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post2 = {
        title: this.title,
        text: this.text
      };
      this.onAdd.emit(post)
      this.text = ' ';
      this.title = ' ';
    }
  }
}
