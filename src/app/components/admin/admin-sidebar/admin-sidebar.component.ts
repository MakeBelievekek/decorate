import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SwitchModel } from '../../../models/switchModel';
import { SwitchService } from '../../../services/switch.service';


@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls: ['./admin-sidebar.component.css'],
})
export class AdminSidebarComponent implements OnInit {

    constructor(private switchService: SwitchService) { }

    @Output() toggle: EventEmitter<SwitchModel> = new EventEmitter();
    chosen: string;

    ngOnInit(): void {
        this.chosen = 'product';
    }

    switchToggle(type: string) {
        this.chosen = type;
        this.toggle.emit(this.switchService.switch(type));

    }
}
