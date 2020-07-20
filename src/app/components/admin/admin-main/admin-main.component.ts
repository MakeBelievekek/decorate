import { Component, Input, OnInit } from '@angular/core';
import { SwitchModel } from '../../../models/switchModel';

@Component({
    selector: 'app-admin-main',
    templateUrl: './admin-main.component.html',
    styleUrls: ['./admin-main.component.css'],
})
export class AdminMainComponent implements OnInit {

    constructor() { }

    @Input() inputToggle: SwitchModel = new class implements SwitchModel {
        category: boolean;
        product: boolean = true;
    };


    ngOnInit(): void {

    }


}
