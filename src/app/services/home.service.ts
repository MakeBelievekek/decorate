import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HomeModel} from '../models/homeModel';
import {environment} from '../../environments/environment';

const BASE_URL = environment.apiUrl;
const header = new HttpHeaders({'Cache-Control': 'max-age=31536000'});

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  getHomeImages(): Observable<HomeModel[]> {

    return this.http.get<HomeModel[]>(BASE_URL + 'home');
  }
}
