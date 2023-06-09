import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, defer, Observable, throwError} from "rxjs";
import {Movie} from "../models/movie";

@Injectable()
export class MovieService {
  url = "http://localhost:3000/movies";

  constructor(private http: HttpClient) { }

  getMovies(categoryId: number): Observable<Movie[]> {
    let urlWithCategory = this.url;

    if (categoryId) {
      urlWithCategory += '?categoryId=' + categoryId;
    }

    return this.http.get<Movie[]>(urlWithCategory).pipe(
      catchError(this.handleError)
    );
  }

  getMovieId(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(this.url + "/" + movieId)
      .pipe(
        catchError(this.handleError)
      );
  }

  createMovie(movie: Movie): Observable<Movie> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer token'
      })
    };

    return this.http.post<Movie>(this.url, movie, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof  ErrorEvent) {
      // Client yada network
    } else {
      switch (error.status) {
        case 404:
          console.log("Not Found");
          break;
        case 403:
          console.log("Access Denied");
          break;
        case 500:
          console.log("Internal server error");
          break;
        default:
          console.log("Bilinmeyen");
      }
    }
    return throwError("Bir hata oluştu");
  }
}
