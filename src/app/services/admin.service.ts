import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FormDataModel} from '../models/formDataModel';
import {ProductModel} from '../models/productModel';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AttributeListItemModel} from "../models/attributeListItemModel";
import {AttributeData} from "../models/attributeData";
import {AttributeModel} from "../models/attributeModel";

const BASE_URL = 'https://localhost:8443';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  toggleService = new Subject<boolean>();

  createProduct(data: ProductModel, typeOfProduct): Observable<ProductModel> {
    return this.http.post<ProductModel>(BASE_URL + '/' + typeOfProduct, data);
  }

  getAllAttribute(): Observable<FormDataModel> {
    return this.http.get<FormDataModel>(BASE_URL + '/admin/formData');
  }

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
    return this.http.post(BASE_URL + '/attribute', attribute)
  }
}
