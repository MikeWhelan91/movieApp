import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';


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


  onDelete(id: string){
    console.log("Deleting item")
    this.movieService.DeleteMovie(id).subscribe();
    
    }
    

}

