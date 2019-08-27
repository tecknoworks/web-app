import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _httpClient: HttpClient,
    private movieService: MovieService
    ) {
  }

  async login(username: String, password: String){
    try {
      let user=await this._httpClient.post<User>(`${environment.gatewayApi}/auth/login`,{username, password}).toPromise();
      localStorage.setItem("user", JSON.stringify(user))
      this.movieService.initMovies()
    } catch (error) {
      console.log(error);
    }
  }

  async register(registerData: object){
    try {
      let user=await this._httpClient.post<User>(`${environment.gatewayApi}/auth/register`,registerData).toPromise();
      localStorage.setItem("user", JSON.stringify(user))
      this.movieService.initMovies()
    } catch (error) {
      console.log(error.message);
      
    }
  }

  logout(){
    localStorage.removeItem('user');
    this.movieService.initMovies()
  }

  get isAuth():boolean{
    return localStorage.getItem('user')!=null;
  }

  get currentUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

}
