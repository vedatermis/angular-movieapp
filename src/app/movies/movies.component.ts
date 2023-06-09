import { Component, OnInit } from '@angular/core';
import {Movie} from "../models/movie";
import {AlertifyService} from "../services/alertify.service";
import {MovieService} from "../services/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [
    MovieService
  ]
})
export class MoviesComponent implements OnInit {
  title = "Film Listesi";
  movies: Movie[] = [];
  filterText: string = "";
  error: any;

  constructor(
    private alertify: AlertifyService,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieService.getMovies(params["categoryId"]).subscribe(data => {
        this.movies = data;
      }, error => {
        this.error = error
      });
    });
  }

  addToList($event: any, movie: Movie) {
    if($event.target.classList.contains("btn-primary")) {
      $event.target.innerText = "Remove";
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

      this.alertify.success(movie.title + ' listene eklendi.');
    } else {
      $event.target.innerText = "Add";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

      this.alertify.error(movie.title + ' listene çıkarıldı.');

    }
  }
}
