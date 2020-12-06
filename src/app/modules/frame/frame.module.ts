import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContentHeaderComponent } from '../../components/home/content-header/content-header.component';
import { NavbarModalComponent } from '../../components/navbar/navbar-modal/navbar-modal.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AnimDirective } from '../../directives/anim.directive';
import { BackgroundImgDirective } from '../../directives/background-img.directive';
import { DomChangeDirective } from '../../directives/dom-change.directive';


@NgModule({
    declarations: [
        NavbarComponent,
        NavbarModalComponent,
        FooterComponent,
        ContentHeaderComponent,
        BackgroundImgDirective,
        DomChangeDirective,
        AnimDirective,
        BreadcrumbComponent,
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
       // MatSidenavModule,
        MatListModule,
        MatButtonModule,
        LayoutModule,
        MatBadgeModule,
        MatIconModule,
        RouterModule,
        FlexLayoutModule,
        OverlayPanelModule,
    ],
    exports: [
        NavbarComponent,
        NavbarModalComponent,
        FooterComponent,
        ContentHeaderComponent,
        BackgroundImgDirective,
        CommonModule,
        CarouselModule,
        BreadcrumbComponent,
    ],
})
export class FrameModule {
}
