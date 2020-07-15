import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        FooterComponent,
        NavbarComponent,
        HomeComponent,
        ContentHeaderComponent,
        NewsletterComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,

        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
