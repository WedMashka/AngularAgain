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
import { PipesComponent } from './pipes/pipes.component';
import { TestDirectivesComponent } from './test-directives/test-directives.component';
import { Dir1Directive } from './test-directives/dir1.directive';
import { Dir2Directive } from './test-directives/dir2.directive';
import { Dir3Directive } from './test-directives/dir3.directive';
import { Dir4Directive } from './test-directives/dir4.directive';
import { CreatePipePipe } from './pipes/create-pipe.pipe';
import { PipeFilterPipe } from './pipes/pipe-filter.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LearnDirectivesComponent,
    ApplicationsNumber2Component,
    PostFormComponent,
    Post2Component,
    PipesComponent,
    TestDirectivesComponent,
    Dir1Directive,
    Dir2Directive,
    Dir3Directive,
    Dir4Directive,
    CreatePipePipe,
    PipeFilterPipe
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
