import { Component, OnInit, Input } from '@angular/core';
import {MovieService, Movie} from '../../Services/movie.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //varibale
  ListMovie: Movie[];

  constructor(private MovieService:MovieService, private router:Router) { }

  ngOnInit(): void {
    this.listMovie();
  }
title = ''
searchMovies(){
  console.log(this.title)
  this.MovieService.searchMovies(this.title).subscribe(
    res => {
      this.ListMovie=<any>res;
      console.log(res)
    },
    err => console.log(err)
  )
}
  fixDate(date:string) {
    const newDate:string[] = date.split('-')
    return [newDate[2].split('T')[0], newDate[1], newDate[0]].join('-')
  }

  listMovie()
  {
    this.MovieService.getMovies().subscribe(
      res=>{
        this.ListMovie=<any>res;
      },
      err => console.log(err)
    );
  }


  

  delete(id:string)
  {
    this.MovieService.deleteMovie(id).subscribe(
      res=>{
        this.listMovie();
      },
      err=> console.log(err)
      );
  }

  update(id:string){
    this.router.navigate(['/update/'+id]);
  }
}
