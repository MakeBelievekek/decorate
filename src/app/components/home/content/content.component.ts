import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {


    constructor() { }


    @Input() darkener: string;
    @Input() translucent: string;
    @Input() pillow: string;

    ngOnInit(): void {
    }


}
