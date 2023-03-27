import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { LearnDirectivesComponent } from './learn-directives/learn-directives.component';
import { ApplicationsNumber2Component } from './applications-number2/applications-number2.component';
import { PostFormComponent } from './applications-number2/post-form/post-form.component';
import { Post2Component } from './applications-number2/post2/post2.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LearnDirectivesComponent,
    ApplicationsNumber2Component,
    PostFormComponent,
    Post2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
