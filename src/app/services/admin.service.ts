import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AttributeData } from '../models/attributeData';
import { AttributeModel } from '../models/attributeModel';
import { FormDataModel } from '../models/formDataModel';
import { ProductModel } from '../models/productModel';
import { ApiErrorHandler } from './apiErrorHandler';
import {environment} from '../../environments/environment';

const ADMIN_BASE_URL = environment.apiUrl + 'api/restricted/admin';

@Injectable({
    providedIn: 'root',
})
export class AdminService {

    constructor(private http: HttpClient, private errorHandler: ApiErrorHandler) {
    }


    toggleService = new Subject<boolean>();

    createProduct(data: ProductModel, typeOfProduct): Observable<ProductModel> {
        return this.http.post<ProductModel>(ADMIN_BASE_URL + '/' + typeOfProduct, data)
            .pipe(retry(1), catchError(this.errorHandler.handleError));
    }

    saveExcelProducts(data: ProductModel[]) {
        return this.http.post<ProductModel[]>(ADMIN_BASE_URL + '/excelData', data);
    }

    getAllAttribute(): Observable<FormDataModel> {
        return this.http.get<FormDataModel>(ADMIN_BASE_URL + '/formData');
    }

    /*  saveProductFromExcel(data: ProductModel[]) {
          return this.http.post<ProductModel>(ADMIN_BASE_URL + '/' + typeOfProduct, data);
      }
  */
    createCheckboxControls(colors: AttributeData[], patterns: AttributeData[], styles: AttributeData[], form: FormGroup) {
        colors.forEach(() => {
            const control = new FormControl(false);
            (form.controls.productColors as FormArray).push(control);
        });
        styles.forEach(() => {
            const control = new FormControl(false);
            (form.controls.productStyles as FormArray).push(control);
        });
        patterns.forEach(() => {
            const control = new FormControl(false);
            (form.controls.productPatterns as FormArray).push(control);
        });
    }

    createColorsArrayToSend(form: FormGroup, colors: AttributeData[]): string[] {
        return form.value.productColors
            .map((color, index) => color ? colors[index] : null)
            .filter(color => color !== null);
    }

    createPatternsArrayToSend(form: FormGroup, patterns: AttributeData[]): string[] {
        return form.value.productPatterns
            .map((pattern, index) => pattern ? patterns[index] : null)
            .filter(pattern => pattern !== null);
    }

    createStylesArrayToSend(form: FormGroup, styles: AttributeData[]): string[] {
        return form.value.productStyles
            .map((style, index) => style ? styles[index] : null)
            .filter(style => style !== null);
    }

    saveAttribute(attribute: AttributeModel) {
        return this.http.post(ADMIN_BASE_URL + '/attribute', attribute)
            .pipe(retry(1), catchError(this.errorHandler.handleError));
    }

    saveAttributesFromExcel(attributes: AttributeModel[]) {
        return this.http.post(ADMIN_BASE_URL + '/attribute/excelAttribute', attributes)
            .pipe(retry(1), catchError(this.errorHandler.handleError));
    }
}
