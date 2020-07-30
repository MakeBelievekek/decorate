import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminContentComponent } from './components/admin/admin-content/admin-content.component';
import { AdminMainComponent } from './components/admin/admin-main/admin-main.component';
import { AdminProductFormComponent } from './components/admin/admin-product-form/admin-product-form.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './components/admin/admin.component';
import { CategoryFormComponent } from './components/admin/category-form/category-form.component';
import { DiagramsComponent } from './components/admin/diagrams/diagrams.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentHeaderComponent } from './components/home/content-header/content-header.component';
import { ContentComponent } from './components/home/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { NewsletterComponent } from './components/home/newsletter/newsletter.component';
import { SecondContentComponent } from './components/home/second-content/second-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterComponent } from './components/products/filter/filter.component';
import { ProductsHeaderComponent } from './components/products/products-header/products-header.component';
import { ProductComponent } from './components/products/products-list/product/product.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsComponent } from './components/products/products.component';
import { ThirdContentComponent } from './components/home/third-content/third-content.component';
import { FourthContentComponent } from './components/home/fourth-content/fourth-content.component';
import { NewsComponent } from './components/home/news/news.component';
import { SalesComponent } from './components/home/sales/sales.component';
import { ProductsModalComponent } from './components/products/products-modal/products-modal.component';
import { NavbarModalComponent } from './components/navbar/navbar-modal/navbar-modal.component';
import { BasketComponent } from './components/basket/basket.component';
import { BasketHeaderComponent } from './components/basket/basket-header/basket-header.component';
import { BasketContentComponent } from './components/basket/basket-content/basket-content.component';
import { BasketBottomComponent } from './components/basket/basket-bottom/basket-bottom.component';
import { BasketItemComponent } from './components/basket/basket-item/basket-item.component';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        FooterComponent,
        NavbarComponent,
        HomeComponent,
        ContentHeaderComponent,
        NewsletterComponent,
        SecondContentComponent,
        AdminComponent,
        ProductsComponent,
        AdminContentComponent,
        AdminMainComponent,
        AdminSidebarComponent,
        AdminProductFormComponent,
        CategoryFormComponent,
        FilterComponent,
        ProductsListComponent,
        ProductComponent,
        ProductsHeaderComponent,
        DiagramsComponent,
        ThirdContentComponent,
        FourthContentComponent,
        NewsComponent,
        SalesComponent,
        ProductsModalComponent,
        NavbarModalComponent,
        BasketComponent,
        BasketHeaderComponent,
        BasketContentComponent,
        BasketBottomComponent,
        BasketItemComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
