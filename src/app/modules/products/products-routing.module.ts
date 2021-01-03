import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from '../../components/products/products.component';
import {ProductListResolver} from '../../services/resolvers/product-list-resolver';
import {ProductsListComponent} from '../../components/products/products-list/products-list.component';
import {AttributeFilterResolver} from '../../services/resolvers/attribute-filter-resolver';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':productType',
    component: ProductsComponent,
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    resolve: {
      attribute: AttributeFilterResolver,
    },
    children: [
      {
        path: '',
        component: ProductsListComponent,
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
        resolve: {
          productList: ProductListResolver,
        },
      },
      {
        path: ':productSubType',
        component: ProductsListComponent,
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
        resolve: {
          productList: ProductListResolver,
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
}
