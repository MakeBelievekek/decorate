import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {

    constructor() { }


    @Input() darkener: string;
    color:string = 'red';

    ngOnInit(): void {
      document.documentElement.style
        .setProperty('--url', 'url('+this.darkener+')');
        console.log(this.darkener);
    }

}
