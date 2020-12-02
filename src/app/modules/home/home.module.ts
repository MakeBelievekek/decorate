import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from '../../components/home/content/content.component';
import { HomeComponent } from '../../components/home/home.component';
import { NewsComponent } from '../../components/home/news/news.component';
import { NewsletterComponent } from '../../components/home/newsletter/newsletter.component';
import { SalesComponent } from '../../components/home/sales/sales.component';
import { SecondContentComponent } from '../../components/home/second-content/second-content.component';
import { ThirdContentComponent } from '../../components/home/third-content/third-content.component';
import { NguiInViewComponent } from '../../components/ngui-in-view/ngui-in-view.component';
import { FrameModule } from '../frame/frame.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
    declarations: [
        HomeComponent,
        ContentComponent,
        NewsletterComponent,
        NewsComponent,
        SalesComponent,
        SecondContentComponent,
        ThirdContentComponent,
        NguiInViewComponent,
    ],
    imports: [
        RouterModule,
        FrameModule,
        HomeRoutingModule,

    ],
})
export class HomeModule {
}
