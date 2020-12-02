import { Component, Input, OnInit } from '@angular/core';
import { ScreenSizeModel } from '../../../models/ScreenSize.model';

@Component({
    selector: 'app-second-content',
    templateUrl: './second-content.component.html',
    styleUrls: ['./second-content.component.css'],
})
export class SecondContentComponent implements OnInit {

    constructor() { }

    @Input() children: string;
    @Input() blackout: string;
    @Input() furniture: string;
    @Input() window: ScreenSizeModel;

    ngOnInit(): void {

    }

}
