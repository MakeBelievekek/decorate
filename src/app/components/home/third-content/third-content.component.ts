import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ScreenSizeModel } from '../../../models/ScreenSize.model';
import { ScreenService } from '../../../services/screen.service';

@Component({
    selector: 'app-third-content',
    templateUrl: './third-content.component.html',
    styleUrls: ['./third-content.component.css'],
})
export class ThirdContentComponent implements OnInit {

    constructor(private screenService: ScreenService) {
    }

    screenSize: ScreenSizeModel = new class implements ScreenSizeModel {
        height: number;
        width: number;
    };
    @Input() wallpaper: string;
    @Input() decoration: string;

    ngOnInit(): void {
        document.documentElement.style
            .setProperty('--wallpaperUrl', 'url(' + this.wallpaper + ')');
        document.documentElement.style
            .setProperty('--decorationUrl', 'url(' + this.decoration + ')');

    }

    @HostListener('window:resize', ['$event'])
    changeContentOnResize() {
        this.screenSize = this.screenService.getScreenSize();
    }

}
