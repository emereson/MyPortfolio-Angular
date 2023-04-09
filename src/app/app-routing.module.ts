import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanerComponent } from './components/baner/baner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { SkillComponent } from './components/skill/skill.component';

const routes: Routes = [
  {
    path:'home',
    component:BanerComponent
  },
  {
    path:'aboutme',
    component:AboutmeComponent
  },
  {
    path:'my-projects',
    component:MyProjectsComponent
  },
  {
    path:'skill',
    component:SkillComponent
  },
  {
    path:'**',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
