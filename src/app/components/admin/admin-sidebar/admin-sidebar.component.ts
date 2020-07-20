import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SwitchModel } from '../../../models/switchModel';

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls: ['./admin-sidebar.component.css'],
})
export class AdminSidebarComponent implements OnInit {

    constructor() { }

    switch: SwitchModel = new class implements SwitchModel {
        category: boolean;
        product: boolean;
    };
    @Output() toggle: EventEmitter<SwitchModel> = new EventEmitter();

    ngOnInit(): void {
    }

    switchToggle(type: string) {
        if (type === 'category') {
            this.switch.category = true;
            this.switch.product = false;
        } else {
            this.switch.category = false;
            this.switch.product = true;
        }
        this.toggle.emit(this.switch);
    }
}
