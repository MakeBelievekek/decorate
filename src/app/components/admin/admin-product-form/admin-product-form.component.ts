import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryListItem } from '../../../models/categoryListItem';
import { ProductModel } from '../../../models/product-model';
import { AdminService } from '../../../services/admin.service';

@Component({
    selector: 'app-admin-product-form',
    templateUrl: './admin-product-form.component.html',
    styleUrls: ['./admin-product-form.component.css'],
})
export class AdminProductFormComponent implements OnInit {

    productForm: FormGroup;
    categories: CategoryListItem[];

    constructor(private adminService: AdminService, private formBuilder: FormBuilder, private http: HttpClient) {
        this.productForm = this.formBuilder.group({
            productName: [''],
            productDesc: [''],
            productCategory: [''],
            productImg: [''],
        });
    }

    ngOnInit(): void {
        this.adminService.getAllCategories().subscribe(
            (data) => {this.categories = data;},
            () => {},
            () => {},
        );

    }


    saveProduct() {
        this.adminService.createProduct(this.getValuesFromForm()).subscribe(() => {});
    }

    getValuesFromForm(): ProductModel {
        const data: ProductModel = {
            productName: null,
            productDesc: null,
            categoryId: null,
            productCategory: null,
            productImg: null,
        };
        data.productName = this.productForm.controls['productName'].value;
        data.productDesc = this.productForm.controls['productDesc'].value;
        data.productCategory = this.productForm.controls['productCategory'].value;
        data.productImg = this.productForm.controls['productImg'].value;
        data.categoryId = this.adminService.findCategoryId(this.categories, data.productCategory);
        return data;
    }

}
