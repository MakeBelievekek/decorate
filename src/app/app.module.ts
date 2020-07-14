import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContentComponent} from './components/content/content.component';
import {FooterComponent} from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        FooterComponent,
        NavbarComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,

        AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

,
})
export class AppModule { }
