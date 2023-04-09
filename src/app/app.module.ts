import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BanerComponent } from './components/baner/baner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { SkillComponent } from './components/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BanerComponent,
    AboutmeComponent,
    MyProjectsComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
