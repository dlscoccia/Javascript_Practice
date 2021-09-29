import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MovieService } from './Services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ListMovie: Movie[];
  constructor(private MovieService:MovieService, private router:Router) { }
  
  getMovie(id:string){
    this.MovieService.getOneMovie(id).subscribe(
      res=>{
        console.log(res);
        this.ListMovie=<any>res;
      },
      err => console.log(err)
    );
  }
}
