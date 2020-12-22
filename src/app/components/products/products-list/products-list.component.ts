import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../../../models/productModel';
import { RegexService } from '../../../services/regexService';


@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    @Input() products: ProductModel[];

    constructor(private route: Router, private regexService: RegexService) {
    }


    ngOnInit(): void {
    }

    navigateToProduct(product: ProductModel) {
        let PATH = '/';
        let convertedProductType = this.regexService.urlWithoutAccents(product.productType);
        let curtainSubTypeIfExist = '/';
        let convertedProductName = this.regexService.convertName(product.name);
        for (let attr of product.attributeCreationFormDataList) {
            if (attr.type === 'TYPE') {
                curtainSubTypeIfExist += this.regexService.urlWithoutAccents(attr.description) + '/';
            }
        }

        PATH += convertedProductType + curtainSubTypeIfExist + convertedProductName;

        console.log(product.attributeCreationFormDataList);
        this.route.navigateByUrl(PATH);
    }
}
