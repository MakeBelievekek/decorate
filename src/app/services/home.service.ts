import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeModel } from '../models/homeModel';

const BASE_URL = 'https://localhost:8443/home';

@Injectable({
    providedIn: 'root',
})
export class HomeService {

    constructor(private http: HttpClient) {}

    getHomeImages(): Observable<HomeModel[]> {
        return this.http.get<HomeModel[]>(BASE_URL);
    }
}
