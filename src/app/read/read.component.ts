import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  myMovies: any = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovieInformation().subscribe((data) => {
      this.myMovies = data.movies;
      console.log(this.myMovies);
  });
}

  }


