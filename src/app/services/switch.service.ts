import { Injectable } from '@angular/core';
import { SwitchModel } from '../models/switchModel';


@Injectable({
    providedIn: 'root',
})
export class SwitchService {
    switchMod: SwitchModel = new class implements SwitchModel {
        category: boolean;
        product: boolean;
        diagram: boolean;
    };

    switch(type: string) {
        if (type === 'category') {
            this.switchMod.diagram = false;
            this.switchMod.category = true;
            this.switchMod.product = false;
        }
        if (type === 'diagrams') {
            this.switchMod.category = false;
            this.switchMod.product = false;
            this.switchMod.diagram = true;
        }
        if (type === 'product') {
            this.switchMod.diagram = false;
            this.switchMod.category = false;
            this.switchMod.product = true;
        }
        return this.switchMod;
    }
}
