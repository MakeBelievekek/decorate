import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HomeModel} from '../models/homeModel';
import {environment} from '../../environments/environment';

const HOME_BASE_URL = environment.apiUrl + 'api/public/home';


@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  getHomeImages(): Observable<HomeModel[]> {
    console.log(HOME_BASE_URL);
    return this.http.get<HomeModel[]>(HOME_BASE_URL);
  }
}
