import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {

    constructor() { }


    @Input() darkener: string ='https://photos.google.com/album/AF1QipN86tUsUseHIsPR6sxvllwgHQmIOPIL8hXjjSDV/photo/AF1QipNOH-yDnFRQDdp-Iqbqqoq4_yylHcUkyFtOEwCI';
    color:string = 'red';

    ngOnInit(): void {
        console.log(this.darkener);
    }

}
