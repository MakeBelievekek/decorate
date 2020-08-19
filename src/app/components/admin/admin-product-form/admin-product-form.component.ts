import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {AttributeData} from '../../../models/attributeData';
import {AttributeListItemModel} from '../../../models/attributeListItemModel';
import {FormDataModel} from '../../../models/formDataModel';
import {ImageModel} from '../../../models/imageModel';
import {WallpaperModel} from '../../../models/wallpaper-model';
import {AdminService} from '../../../services/admin.service';


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
  types: string[] = ['Wallpaper', 'Curtain']

  constructor(private adminService: AdminService, private http: HttpClient) {
    this.productForm = new FormGroup({
      'productType': new FormControl(''),
      'productName': new FormControl(''),
      'productDesc': new FormControl(''),
      'productItemNumber': new FormControl(''),
      'productWidth': new FormControl(''),
      'productPatternRep': new FormControl(''),
      'productPrice': new FormControl(''),
      'productComposition': new FormControl(''),
      'productColors': new FormArray([]),
      'productStyles': new FormArray([]),
      'productPatterns': new FormArray([]),
      'primaryImg': new FormControl(''),
      'secondaryImg': new FormControl(''),
      'productFamily': new FormControl(''),
      'productAnnotation': new FormControl(''),
      'productGlue': new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.adminService.getAllAttribute().subscribe((data) => {
      this.attributeList.attributes = data.attributes;
    }, () => {
    }, () => {
      for (let attr of this.attributeList.attributes) {
        if (attr.type === 'Color') {
          this.colors.push(attr);
        }
        if (attr.type === 'Pattern') {
          this.patterns.push(attr);
        }
        if (attr.type === 'Style') {
          this.styles.push(attr);
        }
      }
      this.adminService.createCheckboxControls(this.colors, this.patterns, this.styles, this.productForm)
    });
  }

  saveProduct() {
    const data = {...this.productForm.value};
    data.productColors = this.adminService.createColorsArrayToSend(this.productForm, this.colors);
    data.productPatterns = this.adminService.createPatternsArrayToSend(this.productForm, this.patterns);
    data.productStyles = this.adminService.createStylesArrayToSend(this.productForm, this.styles);
    console.log(data);
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
