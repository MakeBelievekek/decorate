import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AttributeData } from '../../../models/attributeData';
import { AttributeListItemModel } from '../../../models/attributeListItemModel';
import { FormDataModel } from '../../../models/formDataModel';
import { ImageModel } from '../../../models/imageModel';
import { ProductModel } from '../../../models/productModel';
import { AdminService } from '../../../services/admin.service';
import { FileUploadService } from '../../../services/fileUpload.service';

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
        itemNumber: string;
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
    title = 'File-Upload-Save';
    selectedFiles: FileList;
    currentFileUpload: File;
    progress: {percentage: number} = {percentage: 0};
    selectedFile = null;
    changeImage = false;
    productsFromExcel: ProductModel[] = [];
    fileInputLabel: string;


    constructor(private adminService: AdminService, private toastr: ToastrService, private fileUploadService: FileUploadService) {
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
            'cleaningInst': new FormControl(''),
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
            this.adminService.createCheckboxControls(this.colors, this.patterns, this.styles, this.productForm);
        });

    }

    getAttributesId(data: any) {
        for (let at of data.productColors) {
            this.attributeId.push(at.id);
        }
        for (let at of data.productPatterns) {
            this.attributeId.push(at.id);
        }
        for (let at of data.productStyles) {
            this.attributeId.push(at.id);
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
        console.log(this.productModel);
        this.adminService.createProduct(this.productModel, this.productModel.productType.toLowerCase()).subscribe(() => {
        });
    }

    /*
        onFileChange(event) {
            let workBook = null;
            let jsonData = null;
            const reader = new FileReader();
            const file = event.target.files[0];
            reader.onload = (event) => {
                const data = reader.result;
                workBook = XLSX.read(data, {type: 'binary'});
                jsonData = workBook.SheetNames.reduce((initial, name) => {
                    const sheet = workBook.Sheets[name];
                    initial[name] = XLSX.utils.sheet_to_json(sheet);
                    return initial;
                }, {});
                for (var key in jsonData) {
                    if (jsonData.hasOwnProperty(key)) {
                        for (let prod of jsonData[key]) {
                            let img = prod.imageList;
                            console.log(img);
                            this.productModel = prod;
                            this.productModel.imageList = [];
                            this.productModel.imageList.push(new class implements ImageModel {
                                imageType: string;
                                imgUrl: string;
                            });
                            this.productsFromExcel.push(this.productModel);

                        }

                    }
                }
                this.fileInputLabel = file.name;
            };
            reader.readAsBinaryString(file);
        }

        saveExcel() {
            if (this.productsFromExcel) {
                for (let prod of this.productsFromExcel) {
                    console.log(prod.name);
                    this.adminService.createProduct(prod, prod.productType)
                        .subscribe(() => {}
                            , (err) => {
                                this.toastr.error(err);
                            },
                        );
                }
            }
        }
    */

    downloadFile() {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', '_File_Saved_Path');
        link.setAttribute('download', 'file_name.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    change($event) {
        this.changeImage = true;
    }

    changedImage(event) {
        this.selectedFile = event.target.files[0];
    }

    /*   upload() {
           this.progress.percentage = 0;
           this.currentFileUpload = this.selectedFiles.item(0);
           this.fileUploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
                   if (event.type === HttpEventType.UploadProgress) {
                       this.progress.percentage = Math.round(100 * event.loaded / event.total);
                   } else if (event instanceof HttpResponse) {
                       alert('File Successfully Uploaded');
                   }
                   this.selectedFiles = undefined;
               },
           );
       }

       selectFile(event) {
           this.selectedFiles = event.target.files;
       }*/
}
