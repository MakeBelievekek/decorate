import { Injectable } from '@angular/core';
import { SwitchModel } from '../models/switchModel';


@Injectable({
    providedIn: 'root',
})
export class SwitchService {
    switchMod: SwitchModel = new class implements SwitchModel {
        category: boolean;
        product: boolean;
        payment: boolean;
    };

    switch(type: string) {
        if (type === 'category') {
            this.switchMod.payment = false;
            this.switchMod.category = true;
            this.switchMod.product = false;
        }
        if (type === 'payment') {
            this.switchMod.category = false;
            this.switchMod.product = false;
            this.switchMod.payment = true;
        }
        if (type === 'product') {
            this.switchMod.payment = false;
            this.switchMod.category = false;
            this.switchMod.product = true;
        }
        return this.switchMod;
    }
}
