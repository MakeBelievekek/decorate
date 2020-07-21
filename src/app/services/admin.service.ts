import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CategoryListItem } from '../models/categoryListItem';
import { ProductModel } from '../models/product-model';

const PRODUCT_BASE_URL = 'http://localhost:8080';

@Injectable({
    providedIn: 'root',
})
export class AdminService {

    constructor(private http: HttpClient) {}

    toggleService = new Subject<boolean>();

    createProduct(data: ProductModel): Observable<ProductModel> {
        return this.http.post<ProductModel>(PRODUCT_BASE_URL + '/admin', data);
    }

    getAllCategories(): Observable<Array<CategoryListItem>> {
        return this.http.get<Array<CategoryListItem>>(PRODUCT_BASE_URL + '/admin/categories/getAll');
    }
}
