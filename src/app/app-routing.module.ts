import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from "./book/book.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'book', component: BookComponent },
  { path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
