import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContentComponent} from './components/home/content/content.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {ContentHeaderComponent} from './components/home/content-header/content-header.component';
import {NewsletterComponent} from './components/home/newsletter/newsletter.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { SecondContentComponent } from './components/home/second-content/second-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminContentComponent } from './components/admin/admin-content/admin-content.component';
import { AdminMainComponent } from './components/admin/admin-main/admin-main.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AdminProductFormComponent } from './components/admin/admin-product-form/admin-product-form.component';
import { CategoryFormComponent } from './components/admin/category-form/category-form.component';
import { ProductsComponent } from './components/products/products.component';
import { FilterComponent } from './components/products/filter/filter.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductComponent } from './components/products/products-list/product/product.component';
import { DiagramsComponent } from './components/admin/diagrams/diagrams.component';
import { ProductsHeaderComponent } from './components/products/products-header/products-header.component';

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
    ModalComponent,
    AdminComponent,
    ProductsComponent,
    AdminContentComponent,
    AdminMainComponent,
    AdminSidebarComponent,
    AdminProductFormComponent,
    CategoryFormComponent,
    HeaderComponent,
    FilterComponent,
    ProductsListComponent,
    ProductComponent,
    ProductsHeaderComponent,
    DiagramsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
