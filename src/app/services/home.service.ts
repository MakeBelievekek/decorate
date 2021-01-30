import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HomeModel } from '../models/homeModel';

const HOME_BASE_URL = environment.apiUrl + 'api/public/home';


@Injectable({
    providedIn: 'root',
})
export class HomeService {

    darkenerImg: string;
    translucentImg: string;
    blackoutImg: string;
    childrenImg: string;
    decorationImg: string;
    pillowImg: string;
    wallpaperImg: string;
    furnitureFabricImg: string;

    constructor(private http: HttpClient) {
    }

    getHomeImages(): Observable<HomeModel[]> {
        return this.http.get<HomeModel[]>(HOME_BASE_URL);
    }

   public pairingImages(images: HomeModel[]) {


    }
}
