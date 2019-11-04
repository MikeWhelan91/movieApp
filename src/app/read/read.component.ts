import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  MyMovies: any = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovieInformation().subscribe((data) => {
      this.MyMovies = data.movies;
      console.log(this.MyMovies);
    })
  }

}

