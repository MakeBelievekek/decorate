import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../../../models/productModel';
import {RegexService} from '../../../services/regexService';
import {Observable} from 'rxjs';
import {map, pluck, shareReplay, skip, take} from 'rxjs/operators';
import {ScreenService} from '../../../services/screen.service';
import {ProductListService} from '../../../services/product-list.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  @Input() productsList$: Observable<Array<ProductModel>>;

  constructor(private route: Router,
              private regexService: RegexService,
              private activatedRoute: ActivatedRoute,
              private productListService: ProductListService) {
  }


  ngOnInit(): void {
    this.productsList$ = this.activatedRoute.data.pipe(
      take(1),
      pluck('productList'),
      shareReplay(),
      map(([categories, productList]) => productList)
      );

    this.activatedRoute.queryParams.pipe(
      skip(1)
    ).subscribe(
      (queryParams) => {
        this.productsList$ = this.productListService.getProductsByQueryParams(queryParams).pipe(
          take(1),
        );
      }
    );
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

    this.route.navigateByUrl(PATH);
  }
}
