import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-directives',
  templateUrl: './learn-directives.component.html',
  styleUrls: ['./learn-directives.component.css']
})
export class LearnDirectivesComponent {
  now: Date = new Date();
  backgroundToggle: boolean = true;
  classToggle2: boolean = true;
  toggle: boolean = true;
  toggle2: boolean = true;
  toggle3: boolean = true;
  arr: string[] = ['iona', 'mariya', 'ivan', 'pasha', 'marina', 'roman', 'lesha', 'nadiya', 'egor'];
  posts: Posts[] = [{
    title: 'Post 1',
    text: 'какая нибудь статья номре один',
    author: 'Regulus Black',
    comments: [{
          name: 'pasha',
          text: 'коментарий 1'
        }, {
            name: 'pasha2',
            text: 'комментарий 2'
          },
        {
            name: 'pasha3',
            text: 'комментарий 3'
          }]
  },
    {
      title: 'Post 2',
      text: 'какая нибудь статья',
      author: 'Regulus Black',
      comments: [{
        name: 'pasha5',
        text: 'комментарий 1'
      }, {
        name: 'pasha6',
        text: 'комментарий 2'
      },
      {
        name: 'pasha7',
        text: 'комментарий 3'
      }]
    }
  ]
}

export interface Comments{
  name: string,
  text: string
}
export interface Posts{
  title: string,
  text:string,
  author: string,
  comments?: Comments[]
}