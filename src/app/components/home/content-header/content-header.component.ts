import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenSizeModel } from '../../../models/ScreenSize.model';
import { ScreenService } from '../../../services/screen.service';

@Component({
    selector: 'app-content-header',
    templateUrl: './content-header.component.html',
    styleUrls: ['./content-header.component.css'],
})
export class ContentHeaderComponent implements OnInit {
    screenSize: ScreenSizeModel = new class implements ScreenSizeModel {
        height: number;
        width: number;
    };

    constructor(private screenService: ScreenService) { }

    ngOnInit(): void {
        this.changeContentOnResize();
    }

    @HostListener('window:resize', ['$event'])
    changeContentOnResize() {
        this.screenSize = this.screenService.getScreenSize();
    }
}

