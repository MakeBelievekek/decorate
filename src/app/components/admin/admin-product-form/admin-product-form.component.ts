import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {AttributeData} from '../../../models/attributeData';
import {AttributeListItemModel} from '../../../models/attributeListItemModel';
import {FormDataModel} from '../../../models/formDataModel';
import {ImageModel} from '../../../models/imageModel';
import {ProductModel} from '../../../models/productModel';
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
  productType: string;
  colors: AttributeData[] = [];
  patterns: AttributeData[] = [];
  styles: AttributeData[] = [];
  productTypes: string[] = ['', 'Wallpaper', 'Curtain'];
  curtainTypes: string[] = ['', 'Blackout', 'Children', 'Translucent', 'Darkener'];
  primary: ImageModel = new class implements ImageModel {
    imageType: string;
    imgUrl: string;
  };
  second: ImageModel = new class implements ImageModel {
    imageType: string;
    imgUrl: string;
  };
  attributeId: AttributeListItemModel[] = [];
  productModel: ProductModel = new class implements ProductModel {
    annotation: string;
    attributeListItemData: AttributeListItemModel[];
    composition: string;
    imageList: ImageModel[] = [];
    itemNumber: number;
    name: string;
    patternRep: number;
    price: number;
    productDesc: string;
    productFamily: string;
    productType: string;
    recommendedGlue: string;
    width: number;
    height: number;
    cleaningInst: string;
    curtainType: string;
  };

  constructor(private adminService: AdminService, private http: HttpClient) {
    this.productForm = new FormGroup({
      'productType': new FormControl(''),
      'curtainType': new FormControl(''),
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
      'productHeight': new FormControl(''),
      'cleaningInst': new FormControl('')
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

  getAttributesId(data: any) {
    for (let at of data.productColors) {
      this.attributeId.push(at.id)
    }
    for (let at of data.productPatterns) {
      this.attributeId.push(at.id)
    }
    for (let at of data.productStyles) {
      this.attributeId.push(at.id)
    }
  }

  getType() {
    const data = {...this.productForm.value};
    this.productType = data.productType;
  }

  saveProduct() {
    const data = {...this.productForm.value};
    data.productColors = this.adminService.createColorsArrayToSend(this.productForm, this.colors);
    data.productPatterns = this.adminService.createPatternsArrayToSend(this.productForm, this.patterns);
    data.productStyles = this.adminService.createStylesArrayToSend(this.productForm, this.styles);
    this.getAttributesId(data);
    this.productModel.attributeListItemData = this.attributeId;
    this.productModel.productType = data.productType;
    this.productModel.curtainType = data.curtainType;
    this.productModel.productDesc = data.productDesc;
    this.productModel.name = data.productName;
    this.productModel.itemNumber = data.productItemNumber;
    this.productModel.width = data.productWidth;
    this.productModel.height = data.productHeight;
    this.productModel.cleaningInst = data.cleaningInst;
    this.productModel.patternRep = data.productPatternRep;
    this.productModel.price = data.productPrice;
    this.productModel.composition = data.productComposition;
    this.productModel.productFamily = data.productFamily;
    this.productModel.annotation = data.productAnnotation;
    this.productModel.recommendedGlue = data.productGlue;
    this.primary.imageType = 'PRIMARY_KEY';
    this.primary.imgUrl = data.primaryImg;
    this.second.imageType = 'SECONDARY_KEY';
    this.second.imgUrl = data.secondaryImg;
    this.productModel.imageList.push(this.primary);
    this.productModel.imageList.push(this.second);
    console.log(this.productModel)
    this.adminService.createProduct(this.productModel, this.productModel.productType.toLowerCase()).subscribe(() => {
    })
  }


}
