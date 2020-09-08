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
    color:string = 'red';

    ngOnInit(): void {
      document.documentElement.style
        .setProperty('--darkenerUrl', 'url('+this.darkener+')');
      document.documentElement.style
        .setProperty('--translucentUrl', 'url('+this.translucent+')');
      document.documentElement.style
        .setProperty('--pillowUrl', 'url('+this.pillow+')');
    }

}
