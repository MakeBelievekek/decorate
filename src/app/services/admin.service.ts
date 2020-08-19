import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormDataModel } from '../models/formDataModel';
import { WallpaperModel } from '../models/wallpaper-model';

const BASE_URL = 'https://localhost:8443';

@Injectable({
    providedIn: 'root',
})
export class AdminService {

    constructor(private http: HttpClient) {}

    toggleService = new Subject<boolean>();

    createProduct(data: WallpaperModel): Observable<WallpaperModel> {
        return this.http.post<WallpaperModel>(BASE_URL + '/admin', data);
    }

    getAllAttribute(): Observable<FormDataModel> {
        return this.http.get<FormDataModel>(BASE_URL + '/admin/formData');
    }
}
