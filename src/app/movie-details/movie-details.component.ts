import {Component, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
import {MovieService} from "../services/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService]
})
export class MovieDetailsComponent implements OnInit{

  movie: Movie;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute ) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieService.getMovieId(params["movieId"]).subscribe(data => {
        this.movie = data;
      });
    });
  }
}
