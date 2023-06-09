import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MovieCreateComponent} from "./movie-create/movie-create.component";

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies/category/:categoryId', component: MoviesComponent },
  { path: 'movie/create', component: MovieCreateComponent },
  { path: 'movie/:movieId', component: MovieDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
