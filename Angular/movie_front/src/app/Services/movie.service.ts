import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url='/api';
  constructor(private http: HttpClient) { }


  //get movies
  getMovies()
  {
    return this.http.get(this.url);
  }

  //get a movie
  getOneMovie(id:string){
    return this.http.get(this.url+'/movie/'+ id);
  }

  //get a movie
  searchMovies(name:string){
    return this.http.get(this.url+'/' + name);
  }

  //add movie
  addMovie(movie:Movie)
  {
    return this.http.post(this.url, movie);
  }


  //delete
  deleteMovie(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //update movie
  updateMovie(id:string, movie:Movie){
    return this.http.put(this.url+'/'+id, movie);
  }
}


export interface Movie{
  mov_id?:string;
  mov_title?:string;
  mov_year?:number;
  mov_time?:number;
  mov_lang:string;
  mov_dt_rel:string;
  mov_rel_country:string
}
