import { Component, OnInit } from '@angular/core';
import { SwitchModel } from '../../../models/switchModel';

@Component({
    selector: 'app-admin-content',
    templateUrl: './admin-content.component.html',
    styleUrls: ['./admin-content.component.css'],
})
export class AdminContentComponent implements OnInit {

    constructor() { }

    parentToggle: SwitchModel = new class implements SwitchModel {
        category: boolean;
        product: boolean;
    };

    ngOnInit(): void {
    }

    setToggle(toggle: SwitchModel) {
        this.parentToggle = toggle;
        console.log(this.parentToggle);
    }
}
