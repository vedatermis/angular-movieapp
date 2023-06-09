import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category.service";
import {Category} from "../models/category";
import {MovieService} from "../services/movie.service";
import {Router} from "@angular/router";
import {AlertifyService} from "../services/alertify.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [ CategoryService, MovieService ]
})
export class MovieCreateComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private movieService: MovieService,
    private router: Router,
    private alertify: AlertifyService) {
  }

  categories: Category[];
  model: any = { };

  movieForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(4)]),
    description: new FormControl(""),
    imageUrl: new FormControl(""),
    categoryId: new FormControl("-1")
  });
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  clearForm() {
    this.movieForm.patchValue({
      title: '',
      description: '',
      imageUrl: '',
      categoryId: '-1'
    });
  }

  createMovie() {

    // const movie = {
    //   id: 0,
    //   title: this.model.title,
    //   description: this.model.description,
    //   imageUrl: this.model.imageUrl,
    //   datePublished: new Date().getDate(),
    //   categoryId: this.model.categoryId
    // };
    //
    // this.movieService.createMovie(movie).subscribe(data => this.router.navigate(['/movie', data.id]));
  }

  log(value: any) {
    console.log(value);
  }

}
