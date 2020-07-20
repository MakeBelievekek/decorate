import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product-model';

const PRODUCT_BASE_URL = 'http://localhost:8080';

@Injectable({
    providedIn: 'root',
})
export class AdminService {

    constructor(private http: HttpClient) {}

    createProduct(data: ProductModel): Observable<ProductModel> {
        console.log(data);
        return this.http.post<ProductModel>(PRODUCT_BASE_URL, data);
    }
}
