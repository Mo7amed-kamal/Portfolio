import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NotefoundComponent } from './components/notefound/notefound.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent, title:'Mo Kamal | home'},
  {path: 'about', component:AboutComponent, title:'Mo Kamal | about'},
  {path: 'skills', component:SkillsComponent, title:'Mo Kamal | skills'},
  {path: 'projects', component:ProjectsComponent, title:'Mo Kamal | projects'},
  {path: 'contact', component:ContactComponent, title:'Mo Kamal | contact'},
  {path: '**', component:NotefoundComponent, title:'Mo Kamal | Not-Found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'enabled'}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
