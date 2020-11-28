import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../../services/loading.service';


@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
    isSpinnerVisible$: Observable<boolean> = this.loadingService.isNavigationPending$;

    constructor(private loadingService: LoadingService) { }


    @Input() darkener: string;
    @Input() translucent: string;
    @Input() pillow: string;
    color: string = 'red';

    ngOnInit(): void {
        document.documentElement.style
            .setProperty('--darkenerUrl', 'url(' + this.darkener + ')');
        document.documentElement.style
            .setProperty('--translucentUrl', 'url(' + this.translucent + ')');
        document.documentElement.style
            .setProperty('--pillowUrl', 'url(' + this.pillow + ')');
    }

}
