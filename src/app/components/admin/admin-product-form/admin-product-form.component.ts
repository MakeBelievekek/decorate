import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AttributeData } from '../../../models/attributeData';
import { AttributeListItemModel } from '../../../models/attributeListItemModel';
import { FormDataModel } from '../../../models/formDataModel';
import { ImageModel } from '../../../models/imageModel';
import { WallpaperModel } from '../../../models/wallpaper-model';
import { AdminService } from '../../../services/admin.service';


@Component({
    selector: 'app-admin-product-form',
    templateUrl: './admin-product-form.component.html',
    styleUrls: ['./admin-product-form.component.css'],
})
export class AdminProductFormComponent implements OnInit {

    productForm: FormGroup;
    attributeList: FormDataModel = new class implements FormDataModel {
        attributes: AttributeData[];
    };
    colors: AttributeData[] = [];
    patterns: AttributeData[] = [];
    styles: AttributeData[] = [];

    constructor(private adminService: AdminService, private http: HttpClient) {
        this.productForm = new FormGroup({
            'productName': new FormControl(''),
            'productDesc': new FormControl(null),
            'productPatterns': new FormControl(''),
            'productColors': new FormArray([]),
            'primaryImg': new FormControl([]),
            'secondaryImg': new FormControl([]),
        });
    }

    ngOnInit(): void {
        this.adminService.getAllAttribute().subscribe((data) => {
            this.attributeList.attributes = data.attributes;
        }, () => {}, () => {
            for (let attr of this.attributeList.attributes) {
                if (attr.type === 'Color') {
                    this.colors.push(attr);
                }
                if (attr.type === 'Patter') {
                    this.patterns.push(attr);
                }
                if (attr.type === 'Style') {
                    this.styles.push(attr);
                }
            }
            this.createCheckboxControls(); });

    }

    private createCheckboxControls() {
        this.colors.forEach(() => {
            const control = new FormControl(false);
            (this.productForm.controls.productColors as FormArray).push(control);
        });
    }

    saveProduct() {
        const data = {...this.productForm.value};
        console.log(data);
        this.adminService.createProduct(this.getValuesFromForm()).subscribe(() => {});
    }

    getValuesFromForm(): WallpaperModel {
        const data: WallpaperModel = new class implements WallpaperModel {
            annotation: string;
            attributes: AttributeListItemModel[];
            composition: string;
            images: ImageModel[];
            itemNumber: number;
            name: string;
            patternRep: number;
            price: number;
            productDesc: string;
            productFamily: string;
            productType: string;
            recommendedGlue: string;
            width: number;
        };
        data.name = this.productForm.controls['productName'].value;
        data.productDesc = this.productForm.controls['productDesc'].value;

        return data;
    }

}
